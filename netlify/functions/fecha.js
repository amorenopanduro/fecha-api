exports.handler = async (event) => {
  const zona = event.queryStringParameters?.zona;

  if (!zona) {
    return {
      statusCode: 400,
      body: 'Error: zona no especificada',
    };
  }

  try {
    const ahora = new Date();
    const partes = new Intl.DateTimeFormat('sv-SE', {
      timeZone: zona,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).formatToParts(ahora);

    const mapa = {};
    partes.forEach(({ type, value }) => {
      mapa[type] = value;
    });

    const fechaISO = `${mapa.year}-${mapa.month}-${mapa.day}T${mapa.hour}:${mapa.minute}:${mapa.second}`;

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
      body: fechaISO, // Ejemplo: 2025-06-19T23:45:02
    };
  } catch (error) {
    return {
      statusCode: 200,
      body: 'Error: zona inválida',
    };
  }
};
