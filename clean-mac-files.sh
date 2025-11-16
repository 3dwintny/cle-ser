#!/bin/bash

# Script para limpiar archivos ._* de macOS

echo "🧹 Limpiando archivos ._* de macOS..."
find . -name "._*" -type f -delete
echo "✅ Archivos ._* eliminados"
echo "🧹 Limpiando archivos .DS_Store..."
find . -name ".DS_Store" -type f -delete
echo "✅ Archivos .DS_Store eliminados"
