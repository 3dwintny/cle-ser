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

    // OPCIÓN 2: Enviar correo usando Nodemailer (Gmail, Outlook, etc)
    // Descomenta este bloque cuando configures Nodemailer
    /*
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransport({
      service: 'gmail', // o 'outlook', 'yahoo', etc.
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, // App Password, NO tu contraseña normal
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
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

    // OPCIÓN 3: Guardar en base de datos o Google Sheets
    // Por ahora, solo registramos en consola (modo desarrollo)
    console.log('📧 Nuevo mensaje de contacto:', {
      nombre: body.name,
      email: body.email,
      telefono: body.phone,
      mensaje: body.message,
      fecha: new Date().toISOString(),
    });

    // IMPORTANTE: En producción, descomenta una de las opciones anteriores
    // Por ahora retornamos éxito sin enviar correo real
    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje recibido correctamente',
        // Elimina este aviso cuando configures el envío real
        warning: 'Los correos no se están enviando. Configura las variables de entorno.'
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

