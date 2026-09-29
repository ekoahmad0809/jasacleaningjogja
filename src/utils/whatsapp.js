const WA_NUMBER = '6281227293940';
const WA_BASE = `https://wa.me/${WA_NUMBER}`;

export function buildWAUrl(message) {
  return `${WA_BASE}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  hero: 'Halo Jasa Cleaning Jogja, saya ingin konsultasi jasa cleaning. Mohon info estimasi harga dan jadwal.',
  kostMain: 'Halo Jasa Cleaning Jogja, saya tertarik dengan layanan Cleaning Kamar Kost. Mohon info harga dan jadwal.',
  rumahMain: 'Halo Jasa Cleaning Jogja, saya tertarik dengan layanan Cleaning Rumah/Kontrakan. Mohon info harga dan jadwal.',
  toiletMain: 'Halo Jasa Cleaning Jogja, saya tertarik dengan layanan Cleaning Kamar Mandi. Mohon info harga dan jadwal.',
  apartementMain: 'Halo Jasa Cleaning Jogja, saya tertarik dengan layanan Cleaning Apartement. Mohon info harga dan jadwal.',
  rukoMain: 'Halo Jasa Cleaning Jogja, saya tertarik dengan layanan Cleaning Ruko/Kantor/Toko. Mohon info harga dan jadwal.',
  customMain: 'Halo Jasa Cleaning Jogja, saya ingin konsultasi Cleaning Ruangan Custom. Mohon info harga dan jadwal.',
  polishKeramik: 'Halo Jasa Cleaning Jogja, saya tertarik dengan layanan Polish Keramik. Mohon info harga dan jadwal.',
  polishPorcelain: 'Halo Jasa Cleaning Jogja, saya tertarik dengan layanan Polish Porcelain. Mohon info harga dan jadwal.',
  polishMarmer: 'Halo Jasa Cleaning Jogja, saya tertarik dengan layanan Polish Marmer. Mohon info harga dan jadwal.',
  cuciKarpet: 'Halo Jasa Cleaning Jogja, saya tertarik dengan Jasa Cuci Karpet. Mohon info harga dan jadwal.',
  cuciSofa: 'Halo Jasa Cleaning Jogja, saya tertarik dengan Jasa Cuci Sofa. Mohon info harga dan jadwal.',
  general: 'Halo Jasa Cleaning Jogja, saya ingin konsultasi mengenai jasa cleaning. Mohon informasinya.',
};

// Drawer menu messages (konsultasi variant)
export const DRAWER_MESSAGES = {
  kost: 'Halo Jasa Cleaning Jogja, saya ingin konsultasi untuk Cleaning Kamar Kost. Mohon info estimasi harga dan jadwal pengerjaan.',
  rumah: 'Halo Jasa Cleaning Jogja, saya ingin konsultasi untuk Cleaning Rumah/Kontrakan. Mohon info estimasi harga dan jadwal pengerjaan.',
  toilet: 'Halo Jasa Cleaning Jogja, saya ingin konsultasi untuk Cleaning Toilet/Kamar Mandi. Mohon info estimasi harga dan jadwal pengerjaan.',
  apartement: 'Halo Jasa Cleaning Jogja, saya ingin konsultasi untuk Cleaning Apartement. Mohon info estimasi harga dan jadwal pengerjaan.',
  ruko: 'Halo Jasa Cleaning Jogja, saya ingin konsultasi untuk Cleaning Ruko/Kantor/Toko. Mohon info estimasi harga dan jadwal pengerjaan.',
  custom: 'Halo Jasa Cleaning Jogja, saya ingin konsultasi untuk Cleaning Ruangan Custom. Mohon info estimasi harga dan jadwal pengerjaan.',
  polishKeramik: 'Halo Jasa Cleaning Jogja, saya ingin konsultasi untuk Polish Keramik. Mohon info estimasi harga dan jadwal pengerjaan.',
  polishPorcelain: 'Halo Jasa Cleaning Jogja, saya ingin konsultasi untuk Polish Porcelain. Mohon info estimasi harga dan jadwal pengerjaan.',
  polishMarmer: 'Halo Jasa Cleaning Jogja, saya ingin konsultasi untuk Polish Marmer. Mohon info estimasi harga dan jadwal pengerjaan.',
  cuciKarpet: 'Halo Jasa Cleaning Jogja, saya ingin konsultasi untuk Jasa Cuci Karpet. Mohon info estimasi harga dan jadwal pengerjaan.',
  cuciSofa: 'Halo Jasa Cleaning Jogja, saya ingin konsultasi untuk Jasa Cuci Sofa. Mohon info estimasi harga dan jadwal pengerjaan.',
};
