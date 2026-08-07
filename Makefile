.PHONY: help install start build typecheck serve clean deploy check

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

start: check ## Inicia o servidor de desenvolvimento
	cd $(WEBSITE_DIR) && npm start

build: check ## Gera o build de produção
	cd $(WEBSITE_DIR) && npm run build

typecheck: check ## Executa a verificação de tipos TypeScript
	cd $(WEBSITE_DIR) && npm run typecheck

serve: check ## Serve o build localmente (requer build prévio)
	cd $(WEBSITE_DIR) && npm run serve

clean: ## Remove build e dependências instaladas
	cd $(WEBSITE_DIR) && rm -rf build .docusaurus node_modules

deploy: check ## Executa o deploy manual via Docusaurus (gh-pages)
	cd $(WEBSITE_DIR) && npm run deploy

ci: check install build typecheck ## Roda a pipeline completa localmente
	@echo "✅ CI local concluída com sucesso"
