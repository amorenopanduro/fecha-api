exports.handler = async (event) => {
  const zona = event.queryStringParameters?.zona;

  if (!zona) {
    return {
      statusCode: 400,
      body: 'Error: zona no especificada',
    };
  }

  try {
    const fecha = new Date().toLocaleString('sv-SE', {
      timeZone: zona,
      hour12: false
    }).replace(' ', 'T'); // Resultado: 2025-06-19T22:15:00

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
      body: fecha,
    };
  } catch (error) {
    return {
      statusCode: 200,
      body: 'Error: zona inválida',
    };
  }
};
