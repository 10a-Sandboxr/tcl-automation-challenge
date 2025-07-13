export default function handler(req, res) {
  const { slug } = req.query;
  const timestamp = new Date().toISOString();
  const userAgent = req.headers['user-agent'] || 'unknown';
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
  // Log the captured data
  console.log('=== LEGACY ENDPOINT DATA ===');
  console.log('Timestamp:', timestamp);
  console.log('IP Address:', ip);
  console.log('User Agent:', userAgent);
  console.log('Legacy Data:', slug);
  console.log('Full URL:', req.url);
  console.log('============================');
  
  // Return a valid image response
  const imageBuffer = Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
    'base64'
  );
  
  res.setHeader('Content-Type', 'image/png');
  res.setHeader('Content-Length', imageBuffer.length);
  res.status(200).send(imageBuffer);
}