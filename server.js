import expressApp from './src/app.js'


const PORT = process.env.PORT || 3000;

const server = expressApp.listen(PORT, () => {
   console.log(`Server running on port: ${PORT} `) 
});

server.on('error', (error) => {
    console.error('Server error:', error);
    process.exitCode = 1;
});