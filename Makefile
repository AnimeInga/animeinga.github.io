.PHONY: help install dev build preview clean ci

WEBSITE_DIR := website
NODE_MIN_MAJOR := 20

help: ## Exibe esta mensagem de ajuda
	@echo "Comandos disponíveis:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'

check: ## Verifica se o Node.js está instalado na versão mínima recomendada
	@NODE_MAJOR=$$(node --version | cut -d'.' -f1 | tr -d 'v'); \
	if [ "$$NODE_MAJOR" -lt "$(NODE_MIN_MAJOR)" ]; then \
		echo "⚠️  Node.js >= v$(NODE_MIN_MAJOR) recomendado. Versão atual: $$(node --version)"; \
		exit 1; \
	fi
	@echo "✅ Node.js $$(node --version)"

install: check ## Instala as dependências do projeto
	cd $(WEBSITE_DIR) && npm install

dev: check ## Inicia o servidor de desenvolvimento
	cd $(WEBSITE_DIR) && npm run dev

build: check ## Gera o build de produção
	cd $(WEBSITE_DIR) && npm run build

preview: check ## Serve o build localmente (requer build prévio)
	cd $(WEBSITE_DIR) && npm run preview

clean: ## Remove build e dependências instaladas
	cd $(WEBSITE_DIR) && rm -rf dist .astro node_modules

ci: check install build ## Roda a pipeline completa localmente
	@echo "✅ CI local concluída com sucesso"
