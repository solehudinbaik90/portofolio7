import Mock from "../mock";

const database = {
  information: {
    name: "Muhamad Soleh",
    aboutContent:
      "Muhamad Soleh seorang pendidik dengan usia yang tidak muda lagi tapi ingin terus berjuang mencerdaskan kehidupan bangsa demi indonesia yang lebih cerah. Selalu berlatih, berinovasi mengembangan diri agar menjadi pendidik profesional.",
    age: 24,
    phone: "0887-4331-30861",
    nationality: "Indonesia",
    language: "Indonesia, Arab, Sunda",
    email: "solehudinz3692@gmail.com",
    address: "Jungkel, Rajeg, Tangerang",
    freelanceStatus: "Available",
    socialLinks: {
      facebook: "https://facebook.com/soleh.muhamad",
      twitter: "https://facebook.com/soleh.muhamad",
      pinterest: "https://facebook.com/soleh.muhamad",
      behance: "https://facebook.com/soleh.muhamad",
      linkedin: "https://facebook.com/soleh.muhamad",
      dribbble: "https://facebook.com/soleh.muhamad",
      github: "https://github.com",
    },
    brandImage: "/images/brand-image.jpg",
    aboutImage: "/images/about-image.jpg",
    aboutImageLg: "/images/about-image-lg.jpg",
    cvfile: "/files/cv-muhamad-soleh.pdf",
  },
  services: [
    {
      title: "Pendidikan IPA & Fisika",
      icon: "brush-alt",
      details:
        "Menyediakan layanan pengajaran IPA dan Fisika dengan pendekatan yang mudah dipahami, interaktif, dan berorientasi pada kebutuhan peserta didik. Materi disampaikan menggunakan metode pembelajaran yang kreatif untuk meningkatkan pemahaman konsep serta hasil belajar siswa.",
    },
    {
      title: "Pengelolaan Website Sekolah",
      icon: "code",
      details:
        "Membantu sekolah, madrasah, maupun yayasan dalam merancang, mengelola, dan memperbarui website sebagai media informasi, publikasi kegiatan, serta sarana komunikasi antara sekolah, peserta didik, dan masyarakat.",
    },
    {
      title: "Media Pembelajaran Digital",
      icon: "mobile",
      details:
        "Mengembangkan media pembelajaran berbasis digital seperti presentasi interaktif, infografis, video edukasi, dan simulasi pembelajaran untuk mendukung proses belajar mengajar yang lebih menarik dan efektif.",
    },
  ],
  reviews: [
    {
      id: 1,
      content:
        "Saya melihat beliau sebagai sosok pendidik yang disiplin, bertanggung jawab, dan selalu berusaha memberikan yang terbaik bagi peserta didik. Tidak hanya memiliki kemampuan mengajar yang baik, tetapi juga mampu mengembangkan media pembelajaran digital yang menarik dan mudah dipahami oleh siswa.",
      author: {
        name: "Alyssa Soebandono",
        designation: "Freelancer",
      },
    },
    {
      id: 2,
      content:
        "Beliau memiliki dedikasi yang tinggi dalam dunia pendidikan serta mampu menciptakan suasana belajar yang nyaman dan menyenangkan. Cara penyampaian materi yang sistematis membuat peserta didik lebih mudah memahami pelajaran. Selain itu, beliau juga aktif dalam pengembangan media pembelajaran dan teknologi pendidikan di sekolah.",
      author: {
        name: "Arie Untung",
        designation: "Konten Kreator",
      },
    },
    {
      id: 3,
      content: "Beliau menunjukkan profesionalisme yang baik dalam setiap tanggung jawab yang diberikan. Pengalaman mengajar yang dimiliki membuat proses pembelajaran menjadi lebih efektif dan terarah. Kemampuan dalam mengelola website sekolah serta memanfaatkan teknologi pendidikan juga sangat membantu pengembangan kualitas layanan pendidikan.",
      author: {
        name: "Sherly Annavita",
        designation: "Orang tua Murid",
      },
    },
  ],
  skills: [
    {
      title: "HTML5",
      value: 95,
    },
    {
      title: "CSS3",
      value: 90,
    },
    {
      title: "Javascript",
      value: 70,
    },
    {
      title: "jQuery",
      value: 85,
    },
    {
      title: "ReactJS",
      value: 80,
    },
    {
      title: "Photoshop",
      value: 65,
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: "https://dribbble.com",
    },
    {
      id: 2,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg",
      ],
      url: "https://facebook.com",
    },
    {
      id: 3,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: "https://pinterest.com",
    },
    {
      id: 4,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: "#",
    },
    {
      id: 5,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
    },
    {
      id: 6,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
    },
    {
      id: 7,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: "https://twitter.com",
    },
    {
      id: 8,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"],
    },
    {
      id: 9,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"],
    },
    {
      id: 10,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: "#",
    },
    {
      id: 11,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg",
      ],
      url: "https://facebook.com",
    },
    {
      id: 12,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: "https://pinterest.com",
    },
    {
      id: 13,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: "https://dribbble.com",
    },
    {
      id: 14,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
    },
    {
      id: 15,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
    },
    {
      id: 16,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: "https://twitter.com",
    },
    {
      id: 17,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"],
    },
    {
      id: 18,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"],
    },
    {
      id: 19,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: "https://dribbble.com",
    },
    {
      id: 20,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg",
      ],
      url: "https://facebook.com",
    },
    {
      id: 21,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: "https://pinterest.com",
    },
    {
      id: 22,
      title: "Pen Holder",
      subtitle: "Sebuah pen holder dengan desain indah.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: "#",
    },
    {
      id: 23,
      title: "Mug",
      subtitle: "Mug dengan gaya awesome",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2013 - 2020",
        position: "Guru Fisika & IPA",
        company: "SMK PARAMARTA",
        details:
          "Saya mengajar hampir 10 tahun dengan fokus membantu siswa.",
      },
      {
        id: 2,
        year: "2014 - 2020",
        position: "Guru IPA",
        company: "MTs Raudlatul Ilmiyah",
        details:
          "Saya mengajar 11 tahun dan berkontribusi membuat bahan ajar.",
      },
      {
        id: 3,
        year: "2018 - 2019",
        position: "Guru IPA",
        company: "Bimbel Zenius",
        details:
          "Dua tahun saya mengajar IPA, Alhamdulillah murid saya mendapat nilai baik.",
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2003 - 2005",
        graduation: "Sekolah Menengah Pertama",
        university: "SMPN 1 Rajeg",
        details:
          "Lulus dari SMP saya memperoleh kemampuan akademik dan organisasi yang baik.",
      },
      {
        id: 2,
        year: "2006 - 2008",
        graduation: "Sekolah Menengah Atas",
        university: "SMAN 2 Kabupaten Tangerang",
        details:
          "Lulus dari SMA memperoleh nilai akademik kognitif dan praktik dengan predikat baik.",
      },
      {
        id: 3,
        year: "2009 - 2015",
        graduation: "Pendidikan Fisika",
        university: "UIN Syarif Hidayatullah Jakarta",
        details:
          "Memperoleh gelar sarjana pendidikan fisika dan ilmu yang bermanfaat.",
      },
    ],
  },
  blogs: [
    {
      id: 1,
      title: "Jalan Terjal Sang Pendidik Dalam Menyongsong Masa Depan Cerah.",
      featuredImage: "/images/blog-image-1.jpg",
      filesource: "../../blog/markdown-html-supported-blog.md",
      createDay: "20",
      createMonth: "Januari",
      createYear: "2025",
    },
    {
      id: 2,
      title: "Tips Menaklukkan Peserta Didik Dalam Memahami Mata Pelajaran IPA.",
      featuredImage: "/images/blog-image-2.jpg",
      filesource: "../../blog/installing-nodejs-on-your-device.md",
      createDay: "20",
      createMonth: "Februari",
      createYear: "2025",
    },
    {
      id: 3,
      title: "Memilih Media Pembelajaran Yang Sesuai Di Era Digital Saat Ini.",
      featuredImage: "/images/blog-image-3.jpg",
      filesource: "../../blog/uiux-design-starter-with-adobe-xd.md",
      createDay: "20",
      createMonth: "Maret",
      createYear: "2025",
    },
    {
      id: 4,
      title: "Panduan Meraih Sukses Ala Desainer Ditengah Badai Kompetitor.",
      featuredImage: "/images/blog-image-4.jpg",
      filesource: "../../blog/boost-your-post-for-increasing-sales.md",
      createDay: "20",
      createMonth: "April",
      createYear: "2025",
    },
    {
      id: 5,
      title: "Tips Mahir Berbicara Di Depan Publik Berguna Untuk Kamu Yang Ingin Jadi Jurnalis.",
      featuredImage: "/images/blog-image-5.jpg",
      filesource: "../../blog/difference-between-gatsbyjs-and-nextjs.md",
      createDay: "20",
      createMonth: "Mei",
      createYear: "2025",
    },
    {
      id: 6,
      title: "Mari Kita Selalu Jaga Hutan Demi Keseimbangan Ekosistem Agar Tidak Terjadi Bencana.",
      featuredImage: "/images/blog-image-6.jpg",
      filesource:
        "../../blog/how-to-choose-javascript-framework-for-project.md",
      createDay: "20",
      createMonth: "Juni",
      createYear: "2025",
    },
    {
      id: 7,
      title: "Demokrasi Di ujung Tanduk Penegak Hukum Berpihak Pada Penguasa.",
      featuredImage: "/images/blog-image-7.jpg",
      filesource: "../../blog/web-automation-with-python-language.md",
      createDay: "20",
      createMonth: "Juli",
      createYear: "2025",
    },
    {
      id: 8,
      title: "Jangan Biarkan Para Buzzer Merusak Daya Kritis Kita Dengan Konten Receh.",
      featuredImage: "/images/blog-image-8.jpg",
      filesource:
        "../../blog/time-to-use-latest-technology-for-creating-a-website.md",
      createDay: "20",
      createMonth: "Agustus",
      createYear: "2025",
    },
    {
      id: 9,
      title: "Panggung pencitraan Politik di era Digital.",
      featuredImage: "/images/blog-image-9.jpg",
      filesource: "../../blog/think-out-of-the-box.md",
      createDay: "20",
      createMonth: "September",
      createYear: "2025",
    },
    {
      id: 10,
      title: "Stop Hoax jaga ruang digital tetap sehat.",
      featuredImage: "/images/blog-image-1.jpg",
      filesource: "../../blog/trending-designs-in-2020.md",
      createDay: "20",
      createMonth: "April",
      createYear: "2026",
    },
    {
      id: 11,
      title: "Menanam Pohon - Harapan untuk Bumi.",
      featuredImage: "/images/blog-image-2.jpg",
      filesource: "../../blog/how-to-get-10k-instagram-followers.md",
      createDay: "20",
      createMonth: "Mei",
      createYear: "2026",
    },
    {
      id: 12,
      title: "HUT RI ke-81 Berdaulat Adil dan Makmur.",
      featuredImage: "/images/blog-image-3.jpg",
      filesource: "../../blog/what-nodejs-can-do.md",
      createDay: "17",
      createMonth: "Agustus",
      createYear: "2026",
    },
    {
      id: 13,
      title: "Buah Jatuh Tidak Jauh dari Pohonnya.",
      featuredImage: "/images/blog-image-4.jpg",
      filesource: "../../blog/future-of-javascript.md",
      createDay: "20",
      createMonth: "Juni",
      createYear: "2026",
    },
    {
      id: 14,
      title: "Rumus P = F/A dalam Kehidupan.",
      featuredImage: "/images/blog-image-5.jpg",
      filesource: "../../blog/popular-javascript-library-in-2020.md",
      createDay: "20",
      createMonth: "Juli",
      createYear: "2026",
    },
    {
      id: 15,
      title: "Mempelajari Kinerja Organ Tubuh Kita Agar Kita Selalu Hidup Sehat.",
      featuredImage: "/images/blog-image-6.jpg",
      filesource: "../../blog/programmers-must-read-books.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2026",
    },
  ],
  contactInfo: {
    phoneNumbers: ["+62-887-4331-30861"],
    emailAddress: ["solehudinz3692@gmail.com"],
    address: "Jungkel, Tanjakan Mekar, Kec.Rajeg, Tangerang - Banten 15540",
  },
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
