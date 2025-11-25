const express = require('express');
const router = express.Router;
const multer = require('multer');
const komikController = require('../controllers/komikController');
const komik = require('../models/komik');
const upload = multer({ storage: multer.memoryStorage() });

route.post('/komik', upload.single('gambar'), komikController.createKomik)
route.get('/komik', komikController.getAllKomik)
route.get('/komik/:id', komikController.getKomikById)
route.put('/komik/:id', upload.single('gambar'), komikController.updateKomik)
route.delete('/komik/:id', komikController.deleteKomik)



