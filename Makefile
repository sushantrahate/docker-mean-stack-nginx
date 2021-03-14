### DEV

build-dev:
	cd frontend && $(MAKE) build-dev
	cd server && $(MAKE) build

run-dev:
	docker-compose -f docker-compose-dev.yml up --build -d

### PROD
build-production:
	cd frontend && $(MAKE) build-production
	cd server && $(MAKE) build	

run-production:
	docker-compose -f docker-compose-production.yml up  --build -d
	
stop:
	docker-compose down

log-all:
	docker-compose -f docker-compose-production.yml logs -f --tail=0