// index.tsx (HomeScreen)
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import { SafeAreaView } from 'react-native-safe-area-context';

interface NewsCard {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  source: string;
  date: string;
  premium?: boolean;
}

const newsData: NewsCard[] = [
  {
    id: '1',
    title:
      'Le Cameroun investit dans les énergies renouvelables pour réduire les délestages',
    excerpt:
      "Le gouvernement camerounais annonce un plan d'investissement massif dans l'énergie solaire et éolienne...",
    image: 'https://images.pexels.com/photos/9800002/pexels-photo-9800002.jpeg',
    author: 'Michel Ngono',
    source: 'Cameroun Tribune',
    date: "Aujourd'hui à 08:30",
    premium: true,
  },
  {
    id: '2',
    title: 'Réformes majeures dans le système éducatif camerounais',
    excerpt:
      "Une série de réformes visant à moderniser l'enseignement et améliorer la qualité de l'éducation...",
    image: 'https://images.pexels.com/photos/8423047/pexels-photo-8423047.jpeg',
    author: 'Sarah Etonde',
    source: 'Education News',
    date: 'Hier à 14:15',
  },
  {
    id: '3',
    title: 'Développement des infrastructures routières au Cameroun',
    excerpt:
      "Lancement d'un nouveau projet de construction d'autoroutes pour désenclaver les régions...",
    image: 'https://images.pexels.com/photos/5120897/pexels-photo-5120897.jpeg',
    author: 'Jean Takam',
    source: 'Infrastructures Mag',
    date: '28 Mai 2025',
  },
];

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-SemiBold': Inter_600SemiBold,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#f8fafc' }}
      // pointerEvents="box-none"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
        // pointerEvents="box-none"
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          // pointerEvents="box-none"
        >
          <View style={styles.header}>
            <Text style={styles.headerTitle}>MK Digital</Text>
          </View>

          <View style={styles.content}>
            {newsData.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.card}
                activeOpacity={0.7}
                onPress={() => console.log(`Clic sur article ${item.id}`)}
              >
                <Image source={{ uri: item.image }} style={styles.cardImage} />

                {item.premium && (
                  <View style={styles.premiumBadge} pointerEvents="none">
                    <Text style={styles.premiumText}>Premium</Text>
                  </View>
                )}

                <View style={styles.cardContent} pointerEvents="box-none">
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardExcerpt}>{item.excerpt}</Text>

                  <View style={styles.cardMeta}>
                    <View
                      style={styles.authorContainer}
                      pointerEvents="box-none"
                    >
                      <View style={styles.authorAvatar} pointerEvents="none">
                        <Text style={styles.authorInitial}>
                          {item.author.charAt(0)}
                        </Text>
                      </View>
                      <Text style={styles.authorName}>{item.author}</Text>
                    </View>

                    <View style={styles.sourceInfo} pointerEvents="box-none">
                      <Text style={styles.sourceText}>{item.source}</Text>
                      <Text style={styles.dateText}>{item.date}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Inter-SemiBold',
    color: '#16a34a',
  },
  content: {
    padding: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  premiumBadge: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: '#16a34a',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  premiumText: {
    color: '#ffffff',
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  cardExcerpt: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
    marginBottom: 16,
    lineHeight: 20,
  },
  cardMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#16a34a',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  authorInitial: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
  },
  authorName: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#1a1a1a',
  },
  sourceInfo: {
    alignItems: 'flex-end',
  },
  sourceText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
  },
  dateText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#94a3b8',
    marginTop: 2,
  },
});
