# 🚀 Cómo Levantar el Proyecto Elizabeth's Cleaning

## ⚠️ **PROBLEMA IMPORTANTE**

Tu sistema tiene **Node.js v10.23.0**, pero Next.js 15 **requiere Node.js 18 o superior**.

**Sin actualizar Node.js, el proyecto NO funcionará.**

---

## 📋 **Paso a Paso para Levantar el Proyecto**

### 1️⃣ **Actualizar Node.js (OBLIGATORIO)**

#### Opción A: Usando nvm (Recomendado)

```bash
# Instalar nvm si no lo tienes
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reiniciar la terminal o ejecutar:
source ~/.bashrc

# Instalar y usar Node.js 18
nvm install 18
nvm use 18
nvm alias default 18

# Verificar la versión
node --version  # Debería mostrar v18.x.x
npm --version
```

#### Opción B: Descargar desde nodejs.org

1. Ve a [nodejs.org](https://nodejs.org)
2. Descarga la versión **LTS (18.x.x)** para macOS
3. Instala el archivo .pkg
4. Reinicia la terminal

### 2️⃣ **Verificar Versiones**

```bash
# Debería mostrar Node.js 18 o superior
node --version

# Debería mostrar npm 9 o superior  
npm --version
```

### 3️⃣ **Instalar Dependencias**

```bash
# Navegar al directorio del proyecto
cd /Volumes/KINGSTON/2025/SEMETRE_2/GTEQ/Elizabeth-clean/elizabeth-clean

# Instalar todas las dependencias
npm install
```

### 4️⃣ **Configuración de Correos**

✅ **Ya está configurado automáticamente!**

El formulario de contacto envía mensajes directamente a:
**elizabethscleaningservice7@gmail.com**

Usa **FormSubmit.co** - No necesitas configurar nada adicional.

**Nota:** Si necesitas cambiar el correo, lee `CONFIGURACION_CORREOS.md`.

### 5️⃣ **Levantar el Servidor**

```bash
# Modo desarrollo
npm run dev

# El servidor se iniciará en:
# http://localhost:3000
```

### 6️⃣ **Verificar que Funciona**

1. Abre tu navegador
2. Ve a `http://localhost:3000`
3. Navega por las páginas:
   - ✅ Home (`/`)
   - ✅ Services (`/services`)
   - ✅ About (`/about`) - Ya no tiene nombres duplicados
   - ✅ Contact (`/contact`) - Formulario sin duplicados

---

## 🔧 **Comandos Útiles**

```bash
# Desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar en modo producción
npm start

# Verificar errores de código
npm run lint
```

---

## 🚨 **Si Tienes Problemas**

### Error: "Cannot find module"
```bash
# Borrar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Error: "Port 3000 is already in use"
```bash
# Usar otro puerto
npm run dev -- -p 3001
```

### Error: "Command not found: npm"
- Asegúrate de que Node.js esté instalado correctamente
- Reinicia la terminal después de instalar Node.js

---

## 📱 **Estado del Proyecto**

✅ **Completado:**
- Formulario de contacto arreglado (sin duplicados)
- Sección de precios eliminada
- Sistema de correos configurado con FormSubmit.co
- Correo configurado: elizabethscleaningservice7@gmail.com
- Nombres del equipo corregidos
- Navegación actualizada
- Google Reviews integrado

⚠️ **Pendiente:**
- Actualizar Node.js a versión 18+
- Agregar imágenes reales (opcional)

---

## 🎯 **Próximos Pasos**

1. **Actualizar Node.js** (CRÍTICO)
2. **Instalar dependencias** con `npm install`
3. **Levantar el servidor** con `npm run dev`
4. **Probar el formulario** de contacto
5. **Configurar correos** (opcional, ver `CONFIGURACION_CORREOS.md`)

---

**¡El proyecto está listo! Solo necesitas actualizar Node.js para que funcione.**
