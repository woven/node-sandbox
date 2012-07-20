module.exports =
  mongodb:
    development:
      name: "tower-test-development"
      port: 27017
      host: "127.0.0.1"
    test:
      name: "tower-test-test"
      port: 27017
      host: "127.0.0.1"
    staging:
      name: "tower-test-staging"
      port: 27017
      host: "127.0.0.1"
    production:
      name: "tower-test-production"
      port: 27017
      host: "127.0.0.1"
    
  redis:
    development:
      name: "tower-test-development"
      port: 6397
      host: "127.0.0.1"
    test:
      name: "tower-test-test"
      port: 6397
      host: "127.0.0.1"
    staging:
      name: "tower-test-staging"
      port: 6397
      host: "127.0.0.1"
    production:
      name: "tower-test-production"
      port: 6397
      host: "127.0.0.1"
