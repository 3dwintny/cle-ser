# 📧 Configuración de Correos - Elizabeths Cleaning Service LLC

## ¿Dónde llegan los mensajes del formulario?

**✅ ACTUALIZACIÓN:** Ahora usamos **FormSubmit.co** que envía los mensajes directamente al correo **elizabethscleaningservice7@gmail.com**.

Los mensajes llegan automáticamente sin necesidad de configurar nada adicional.

---

## 📬 Correo Actual Configurado

**Correo de destino:** `elizabethscleaningservice7@gmail.com`

Los formularios de contacto envían automáticamente a este correo usando FormSubmit.co.

---

## 🔧 ¿Necesitas cambiar el correo?

Si necesitas cambiar el correo de destino, edita el archivo:
- `src/app/contact/page.tsx` (línea ~100)

Busca: `https://formsubmit.co/ajax/elizabethscleaningservice7@gmail.com`
Y reemplaza con tu nuevo correo.

---

# 📜 Configuración Antigua (Ya NO se usa)

**NOTA:** La siguiente configuración es para referencia histórica. Ya NO usamos API routes ni estos métodos.

Para recibir los mensajes por correo electrónico, se podían seguir estos métodos:

---

## 🚀 Método 1: Resend (RECOMENDADO - Más Fácil)

**Ventajas:** Fácil configuración, gratis hasta 100 correos/día, sin contraseñas complicadas

### Pasos:

1. **Regístrate gratis** en [resend.com](https://resend.com)
2. **Verifica tu dominio** (o usa `resend.dev` para pruebas)
3. **Obtén tu API Key** en el dashboard
4. **Crea un archivo `.env.local`** en la raíz del proyecto:

```env
CONTACT_EMAIL=tu-email@gmail.com
RESEND_API_KEY=re_123456789abcdef
```

5. **Instala Resend:**
```bash
npm install resend
```

6. **Descomenta las líneas 22-35** en `src/app/api/contact/route.ts`

---

## 📨 Método 2: Gmail / Outlook

**Ventajas:** Usas tu correo personal, sin servicios de terceros

### Para Gmail:

1. **Activa la verificación en 2 pasos** en tu cuenta Google
2. **Ve a:** [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. **Genera una "Contraseña de aplicación"** para "Correo"
4. **Copia la contraseña de 16 caracteres** (ejemplo: `abcd efgh ijkl mnop`)
5. **Crea un archivo `.env.local`:**

```env
CONTACT_EMAIL=donde-recibiras-mensajes@gmail.com
EMAIL_USER=tu-email@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

6. **Instala Nodemailer:**
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

7. **Descomenta las líneas 39-57** en `src/app/api/contact/route.ts`

### Para Outlook/Hotmail:

```env
CONTACT_EMAIL=donde-recibiras-mensajes@outlook.com
EMAIL_USER=tu-email@outlook.com
EMAIL_PASSWORD=tu-contraseña-normal
```

---

## ⚙️ Cómo crear el archivo .env.local

1. **En la raíz del proyecto**, crea un archivo llamado `.env.local`
2. **Copia las variables** según el método que elijas
3. **Reemplaza los valores** con tus datos reales
4. **Guarda el archivo** (NO lo subas a GitHub)

**Ejemplo de `.env.local` completo:**

```env
# Email donde recibirás los mensajes
CONTACT_EMAIL=elizabeth@gmail.com

# Para Gmail (opción recomendada si no usas Resend)
EMAIL_USER=elizabeth@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop

# O para Resend (más fácil)
# RESEND_API_KEY=re_123456789
```

---

## 📝 Activar el Envío de Correos

Una vez que hayas configurado las variables de entorno:

1. Abre `src/app/api/contact/route.ts`
2. Busca el método que elegiste (Resend o Nodemailer)
3. **Descomenta el bloque de código** correspondiente
4. **Reinicia el servidor** (Ctrl+C y `npm run dev`)

---

## ✅ Probar el Formulario

1. Inicia el servidor: `npm run dev`
2. Ve a la página de contacto: `http://localhost:3000/contact`
3. Llena el formulario y envíalo
4. **Revisa:**
   - La consola del servidor (verás el log)
   - Tu bandeja de entrada (si configuraste el envío)

---

## 🔐 Seguridad

**IMPORTANTE:**
- ✅ El archivo `.env.local` NO se debe subir a GitHub
- ✅ Ya está incluido en `.gitignore` por defecto
- ✅ Nunca compartas tus contraseñas o API Keys
- ❌ NO uses tu contraseña normal de Gmail, usa una "Contraseña de aplicación"

---

## 🆘 Ayuda

Si tienes problemas:

1. **Verifica** que el archivo `.env.local` está en la raíz del proyecto
2. **Reinicia** el servidor después de crear el archivo
3. **Revisa** la consola del servidor para ver errores
4. **Asegúrate** de que descomentaste el código correcto en `route.ts`

