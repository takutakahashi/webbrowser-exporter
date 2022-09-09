# webbrowser-exporter

This is an expoter with executing web requests via Chrome.
It can export metrics that can read by Prometheus.

## Example

```
takutaka@pcamp-develop-takutaka:~$ curl localhost:9400/metrics
browser_testing_up{url="https://www.takutakahashi.dev/",status="200"} 1.000000
```

## Usage

This product can execute only on Docker container.

```
docker run -p 9400:9400 -it ghcr.io/takutakahashi/webbrowser-exporter:v0.4.5 "https://www.takutakahashi.dev/" "https://www.takutakahashi.dev/index.xml"
```
