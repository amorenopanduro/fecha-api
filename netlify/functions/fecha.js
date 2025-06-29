exports.handler = async (event) => {
  const zona = event.queryStringParameters.zona || 'America/Lima';

  try {
    const fecha = new Date().toLocaleString('sv-SE', {
      timeZone: zona,
      hour12: false,
    });

    const fechaIso = new Date(fecha).toISOString();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
      body: fechaIso,
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: 'Error: zona inválida',
    };
  }
};
