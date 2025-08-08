# -------------------------------------------------
# 1️⃣  Base image – Ruby + Node (for asset pipelines)
# -------------------------------------------------
    FROM ruby:3.2-alpine

    # Install needed system packages
    #   - build-base   → compilers for native gems
    #   - libxml2-dev  → required by some Jekyll plugins
    #   - tzdata       → time‑zone data (optional but handy)
    #   - bash         → for easier entrypoint scripts
    RUN apk add --no-cache \
        build-base \
        libxml2-dev \
        tzdata \
        bash \
        git \
        nodejs \
        npm
    
    # Set a working directory inside the container
    WORKDIR /srv/jekyll
    
    # Copy only the Gemfile (and lockfile if present) first.
    # This allows Docker to cache the bundle install layer
    # when only site content changes.
    COPY Gemfile* ./
    
    # Install Bundler and the gems defined in Gemfile
    RUN gem install bundler && \
        bundle install --jobs 4 --retry 3
    
    # Copy the rest of the site source files
    COPY . .
    
    # Build the static site and generate Pagefind index during image build
    # This creates _site/ and _site/pagefind assets that the site will serve
    RUN bundle exec jekyll build && \
        npx --yes pagefind --site _site
    
    # Expose the default Jekyll port
    EXPOSE 4000
    
    # Default command – start Jekyll in watch mode
    #   --host 0.0.0.0   → reachable from outside the container
    #   --port 4000      → matches EXPOSE
    #   --watch          → rebuild on file changes
    #   --incremental    → faster incremental builds (optional)
    CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "4000", "--watch", "--incremental"]
