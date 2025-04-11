export const productData = {
  // Ürün Detayları
  product: {
    title: "iPhone 15 promax 256 GB kutu fatura şarj mevcut",
    price: 41000,
    serviceFee: 450, // Hizmet bedeli
    get totalPrice() {
        return this.price + this.serviceFee;
    }, // Toplam fiyat (price + serviceFee)

    imagesUrls: [
      "https://ik.imagekit.io/nsnnosdo1/iphone.jpg?updatedAt=1744387783440",
      "https://ik.imagekit.io/nsnnosdo1/WhatsApp%20Image%202025-03-31%20at%2019.20.15%20(5).jpeg?updatedAt=1744388175045",
      "https://ik.imagekit.io/nsnnosdo1/WhatsApp%20Image%202025-03-31%20at%2019.20.15%20(1).jpeg?updatedAt=1744388174985",
      "https://ik.imagekit.io/nsnnosdo1/WhatsApp%20Image%202025-03-31%20at%2019.20.15%20(2).jpeg?updatedAt=1744388174772",
    ],
  
    specs: {
      storage: "256 GB",
      os: "iOS",
      frontCamera: "12 Mp",
      backCamera: "12 Mp",
      color: "Titanyum",
      warranty: "Distribütör Garanti",
      screen: "48 Mp",
      trade: "Yok"
    }
  },

  // Satıcı Bilgileri
  seller: {
    name: "Veyis Aydın",
    location: "Bursa / Gemlik / Kumla Mahallesi",
  },

  // İlan Detayları
  listing: {
    id: "323847328",
    date: "31 Mart 2025",
    category: "İkinci El ve Sıfır Alışveriş > Elektronik Eşya > Telefon > iPhone 15 Pro Max Türkiye Cihaz",
    type: "Sahibinden"
  },

  

    // Teslimat Bilgileri
    delivery: {
      time: "En geç 1 İş Günü içerisinde kargoya verilir",
      isFree: true,
      method: "Ücretsiz Kargo"
    },

  // Param Güvende Bilgileri
  securePayment: {
    title: "S - Param Güvende",
    description: "Güvenli alışveriş sistemi",
    returnPeriod: "2 gün",
    corporateReturnPeriod: "14 gün",
    info: [
      {
        title: "S - Param Güvende Nedir ?",
        description: "S - Param Güvende ile bireysel satıcıdan satın aldığınız ürün için, size ulaştıktan sonra 2 gün içerisinde iade talebinde bulunabilirsiniz..."
      },
      {
        title: "Ürün tutari saticinin hesabina ne zaman gönderilir?",
        description: "Alıcı ürünü onayladıktan sonra ürün tutarı satıcı hesabına gönderilir..."
      },
      // Diğer bilgiler...
    ]
  }
}; 