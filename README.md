
# CV Angelique Miracle Langitan

Website CV profesional yang dibangun dengan ReactJS dan teknologi modern untuk menampilkan portofolio, pengalaman, dan keahlian Angelique Miracle Langitan sebagai Full Stack Developer & UI/UX Designer.

## 🚀 Fitur Utama

- **Responsive Design**: Tampilan yang optimal di semua perangkat
- **Modern UI/UX**: Desain elegan dengan gradien purple-blue dan animasi smooth
- **Komponen Modular**: Struktur kode yang terorganisir dan mudah di-maintain
- **Performance Optimized**: Loading cepat dengan optimasi gambar dan kode
- **SEO Friendly**: Meta tags lengkap dan structured data
- **Interactive Elements**: Hover effects dan micro-interactions

## 🛠️ Teknologi yang Digunakan

- **Frontend**: React, TypeScript, Tailwind CSS
- **UI Components**: Shadcn/ui, Lucide React Icons
- **Build Tool**: Vite
- **Deployment**: Vercel
- **Version Control**: Git & GitHub

## 📋 Struktur Project

```
src/
├── components/          # Komponen React
│   ├── Header.tsx      # Header dengan foto profil dan info kontak
│   ├── About.tsx       # Bagian tentang diri
│   ├── Education.tsx   # Riwayat pendidikan
│   ├── Experience.tsx  # Pengalaman kerja
│   ├── Skills.tsx      # Keahlian dan teknologi
│   ├── Projects.tsx    # Portfolio proyek
│   ├── Certificates.tsx# Sertifikat dan pencapaian
│   └── Contact.tsx     # Informasi kontak dan form
├── data/
│   └── cvData.ts       # Data lengkap CV
├── pages/
│   └── Index.tsx       # Halaman utama
└── lib/
    └── utils.ts        # Utility functions
```

## 🔧 Instalasi dan Penggunaan

### Prerequisites
- Node.js (v16 atau lebih baru)
- npm atau yarn

### Clone Repository
```bash
git clone https://github.com/angelique-langitan/cv-angelique.git
cd cv-angelique
```

### Install Dependencies
```bash
npm install
# atau
yarn install
```

### Jalankan Development Server
```bash
npm run dev
# atau
yarn dev
```

Website akan berjalan di `http://localhost:8080`

### Build untuk Production
```bash
npm run build
# atau
yarn build
```

### Preview Build
```bash
npm run preview
# atau
yarn preview
```

## 🚀 Deployment

### Deploy ke Vercel

1. Push kode ke GitHub repository
2. Connect repository ke Vercel
3. Vercel akan otomatis deploy setiap ada perubahan di branch main

### Manual Deploy ke Vercel
```bash
npm install -g vercel
vercel
```

## 📝 Kustomisasi

### Mengubah Data Personal
Edit file `src/data/cvData.ts` untuk mengubah:
- Informasi personal
- Pengalaman kerja
- Pendidikan
- Skills dan keahlian
- Project portfolio
- Sertifikat

### Mengubah Styling
- Edit `tailwind.config.ts` untuk custom colors dan tema
- Modifikasi komponen di folder `src/components/` untuk perubahan layout
- Update `src/index.css` untuk styling global

### Menambah Fitur Baru
1. Buat komponen baru di `src/components/`
2. Import dan gunakan di `src/pages/Index.tsx`
3. Tambahkan data yang diperlukan di `src/data/cvData.ts`

## 🎨 Design System

### Colors
- **Primary**: Purple gradients (#8B5CF6 to #3B82F6)
- **Background**: White dengan accent gray-50/blue-50
- **Text**: Gray-800 untuk headings, Gray-700 untuk body text

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Font weight 700-900
- **Body**: Font weight 400-500

### Spacing
- Menggunakan Tailwind CSS spacing scale
- Consistent padding dan margin untuk rhythm yang baik

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔍 SEO Features

- Meta tags lengkap (title, description, keywords)
- Open Graph tags untuk social media
- Twitter Card support
- Structured data (JSON-LD)
- Semantic HTML structure

## 📈 Performance

- Lazy loading untuk gambar
- Code splitting otomatis dengan Vite
- Optimized bundle size
- Fast refresh untuk development

## 🤝 Contributing

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

**Angelique Miracle Langitan**
- Email: angelique.langitan@gmail.com
- LinkedIn: [linkedin.com/in/angelique-langitan](https://linkedin.com/in/angelique-langitan)
- GitHub: [github.com/angelique-langitan](https://github.com/angelique-langitan)
- Website: [angelique-portfolio.vercel.app](https://angelique-portfolio.vercel.app)

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) untuk komponen UI
- [Tailwind CSS](https://tailwindcss.com/) untuk styling
- [Lucide React](https://lucide.dev/) untuk icons
- [Unsplash](https://unsplash.com/) untuk placeholder images
- [Vercel](https://vercel.com/) untuk hosting
