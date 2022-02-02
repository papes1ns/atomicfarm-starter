FROM ruby:3.1.0-slim

WORKDIR /app

RUN apt-get update \
  && apt-get install -y --no-install-recommends build-essential curl libmariadb-dev mariadb-client libsqlite3-dev \
  && rm -rf /var/lib/apt/lists/* /usr/share/doc /usr/share/man \
  && apt-get clean

RUN useradd --create-home app \
  && chown app:app -R /app

RUN echo "gem: --no-rdoc --no-ri" > /etc/gemrc

USER app

COPY --chown=app:app Gemfile* /app
RUN bundle install --jobs 20 --retry 5

COPY --chown=app:app . /app

EXPOSE 3000
ENTRYPOINT ["./entrypoint.sh"]

CMD bundle exec rails s -p 3000 -b 0.0.0.0