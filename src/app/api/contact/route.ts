import { NextRequest, NextResponse } from 'next/server';

// Interfaz para los datos del formulario
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validación básica
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // OPCIÓN 1: Enviar correo usando Resend (Recomendado)
    // Descomenta este bloque cuando configures Resend
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'contacto@elizabethscleaning.com', // Tu dominio verificado
      to: process.env.CONTACT_EMAIL || 'tu-email@gmail.com',
      subject: `Nuevo mensaje de ${body.name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Teléfono:</strong> ${body.phone || 'No proporcionado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${body.message}</p>
      `,
    });
    */

    // ENVIAR EMAIL REAL usando FormSubmit (GRATUITO - Sin configuración)
    try {
      const formData = new URLSearchParams();
      formData.append('_subject', `Nuevo mensaje de Elizabeth's Cleaning Services, LLC - ${body.name}`);
      formData.append('name', body.name);
      formData.append('email', body.email);
      formData.append('phone', body.phone || 'No proporcionado');
      formData.append('message', body.message);
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');

      const webhookResponse = await fetch('https://formsubmit.co/tecnotony8@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData
      });

      if (webhookResponse.ok) {
        console.log('✅ Email enviado exitosamente a tecnotony8@gmail.com');
        console.log('📧 Email enviado via FormSubmit');
      } else {
        console.log('⚠️ Error al enviar email, código:', webhookResponse.status);
      }
      
    } catch (error) {
      console.error('Error al enviar email:', error);
      console.log('📧 Mensaje registrado en consola como fallback');
    }

    // OPCIÓN 3: Guardar en base de datos o Google Sheets
    // Por ahora, solo registramos en consola (modo desarrollo)
    console.log('📧 Nuevo mensaje de contacto:', {
      nombre: body.name,
      email: body.email,
      telefono: body.phone,
      mensaje: body.message,
      fecha: new Date().toISOString(),
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje recibido correctamente. Te contactaremos pronto.'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error al procesar el formulario:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}

