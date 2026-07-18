# ── Sonatek Steels — build & push Docker images to GHCR ──────────────────────
#
# Usage:
#   make login                    Log in to ghcr.io (needs GHCR_USER + GHCR_TOKEN)
#   make build                    Build both images locally (no push)
#   make push                     Build + push both images to GHCR
#   make push-client              Build + push only the client image
#   make push-server              Build + push only the server image
#   TAG=v1.2.0 make push          Push under an extra explicit tag (always also
#                                 tags :latest and the current git short SHA)
#
# GHCR_TOKEN must be a GitHub PAT (classic) with the write:packages scope,
# or $GITHUB_TOKEN when run inside a GitHub Actions workflow.

REGISTRY            := ghcr.io
OWNER               := m-afnan2018
REPO                := sonatek-steels-website

IMAGE_CLIENT        := $(REGISTRY)/$(OWNER)/$(REPO)-client
IMAGE_SERVER        := $(REGISTRY)/$(OWNER)/$(REPO)-server

GIT_SHA             := $(shell git rev-parse --short HEAD)
TAG                 ?= latest
TAGS                := $(TAG) $(GIT_SHA)

NEXT_PUBLIC_API_URL ?= https://sonateksteels.in/api

GHCR_USER           ?= $(OWNER)
GHCR_TOKEN          ?=

.PHONY: help login build build-client build-server push push-client push-server clean

help:
	@echo "Targets:"
	@echo "  make login          Log in to ghcr.io (needs GHCR_USER + GHCR_TOKEN env vars)"
	@echo "  make build          Build client + server images locally"
	@echo "  make push           Build and push both images to GHCR (tags: $(TAGS))"
	@echo "  make push-client    Build and push only the client image"
	@echo "  make push-server    Build and push only the server image"
	@echo "  make clean          Remove locally built images (tags: $(TAGS))"

login:
	@if [ -z "$(GHCR_TOKEN)" ]; then \
		echo "Set GHCR_TOKEN (a GitHub PAT with write:packages scope) before running 'make login'."; \
		exit 1; \
	fi
	echo "$(GHCR_TOKEN)" | docker login $(REGISTRY) -u "$(GHCR_USER)" --password-stdin

build-client:
	docker build \
		--build-arg NEXT_PUBLIC_API_URL=$(NEXT_PUBLIC_API_URL) \
		$(foreach t,$(TAGS),-t $(IMAGE_CLIENT):$(t)) \
		../client

build-server:
	docker build \
		$(foreach t,$(TAGS),-t $(IMAGE_SERVER):$(t)) \
		../server

build: build-client build-server

push-client: build-client
	$(foreach t,$(TAGS),docker push $(IMAGE_CLIENT):$(t);)

push-server: build-server
	$(foreach t,$(TAGS),docker push $(IMAGE_SERVER):$(t);)

push: push-client push-server

clean:
	-docker rmi $(foreach t,$(TAGS),$(IMAGE_CLIENT):$(t)) $(foreach t,$(TAGS),$(IMAGE_SERVER):$(t))
