FROM node:14
COPY --from=takutakahashi/any-exporter /app/cmd /cmd
COPY ./config.yaml.ejs /config.yaml.ejs
COPY ./package.json /package.json
COPY ./yarn.lock /yarn.lock
RUN yarn
COPY ./metrics.js /metrics.js
COPY ./entrypoint.js /entrypoint.js
COPY ./lib/execute.js /lib/execute.js
EXPOSE 9400
CMD ["/entrypoint.js"]
