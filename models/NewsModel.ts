export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  source: string;
  date: string;
  premium?: boolean;
}

export class NewsModel {
  static async getNews(): Promise<NewsItem[]> {
    // This would typically fetch from an API
    return [
      {
        id: '1',
        title: 'Le Cameroun investit dans les énergies renouvelables pour réduire les délestages',
        excerpt: 'Le gouvernement camerounais annonce un plan d\'investissement massif dans l\'énergie solaire et éolienne...',
        image: 'https://images.pexels.com/photos/9800002/pexels-photo-9800002.jpeg',
        author: 'Michel Ngono',
        source: 'Cameroun Tribune',
        date: "Aujourd'hui à 08:30",
        premium: true,
      },
      {
        id: '2',
        title: 'Réformes majeures dans le système éducatif camerounais',
        excerpt: 'Une série de réformes visant à moderniser l\'enseignement et améliorer la qualité de l\'éducation...',
        image: 'https://images.pexels.com/photos/8423047/pexels-photo-8423047.jpeg',
        author: 'Sarah Etonde',
        source: 'Education News',
        date: 'Hier à 14:15',
      },
      {
        id: '3',
        title: 'Développement des infrastructures routières au Cameroun',
        excerpt: 'Lancement d\'un nouveau projet de construction d\'autoroutes pour désenclaver les régions...',
        image: 'https://images.pexels.com/photos/5120897/pexels-photo-5120897.jpeg',
        author: 'Jean Takam',
        source: 'Infrastructures Mag',
        date: '28 Mai 2025',
      },
    ];
  }
}