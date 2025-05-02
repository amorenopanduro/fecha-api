exports.handler = async (event) => {
  const zona = event.queryStringParameters.zona || 'America/Lima';

  try {
    const fecha = new Intl.DateTimeFormat('sv-SE', {
      timeZone: zona,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(new Date());

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
      body: fecha,
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: 'Error: zona inválida',
    };
  }
};
