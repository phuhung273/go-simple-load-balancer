# SimpleLB

Simple LB is the simplest Load Balancer ever created.

It uses RoundRobin algorithm to send requests into set of backends and support
health check, auto remove unhealthy backend.

# How to use
```bash
Usage:
  -backends string
        Load balanced backends, use commas to separate
  -port int
        Port to serve (default 3030)
```

Start 4 backends:
```
node multiple_backend.js
```

Start load balancing
```bash
go run main.go --backends=http://localhost:3031,http://localhost:3032,http://localhost:3033,http://localhost:3034
```