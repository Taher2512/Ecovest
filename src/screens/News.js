import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {useTheme} from 'react-native-paper';
import NewsCard from '../components/NewsCard';

const News = () => {
  const [refreshing, setRefreshing] = useState(false);

  currentDate = new Date();

  yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  dayBefore = new Date();
  dayBefore.setDate(dayBefore.getDate() - 2);

  dayBeforeBefore = new Date();
  dayBeforeBefore.setDate(dayBeforeBefore.getDate() - 3);

  const theme = useTheme();

  const posts = [
    {
      title: 'G20 Countries Agree To Increase Clean Energy',
      content:
        " On September 9, 2023, during the G20 Summit in New Delhi, Prime Minister Shri Narendra Modi, alongside leaders from Singapore, Bangladesh, Italy, USA, Brazil, Argentina, Mauritius, and UAE, inaugurated the Global Biofuel Alliance (GBA). As the G20 Chair, India initiated this alliance with the goal of accelerating the worldwide adoption of biofuels.\n\n The GBA's objectives include advancing biofuel technology, promoting sustainable biofuel use, establishing robust standards and certifications, engaging a diverse range of stakeholders, and serving as a central knowledge repository and expert hub. The GBA seeks to function as a catalyst for global collaboration in advancing and widespread adoption of biofuels.",
      date: currentDate,
      imgs: [
        'https://www.stripes.com/incoming/iz0ox1-ap23252534775744.jpg/alternates/LANDSCAPE_910/AP23252534775744.jpg',
        'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/hgri6rhhwk13pcoh_1694329195.jpeg?tr=w-1200,h-900',
        'https://dims.apnews.com/dims4/default/134109d/2147483647/strip/false/crop/5500x3743+0+0/resize/1486x1011!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F31%2Fef%2F3de2ce3d6580e3f28c30efa334b9%2Fbc7e5db4a1aa44468b76789d55acb029',
      ],
    },
    {
      title: 'Tata Power Renewable Arm Raises $425 Million From DFC',
      content:
        ' Pending a US congressional notification, this investment will support India\'s ambitious programme to increase renewable energy manufacturing capability to support domestic solar capacity addition as part of its global green energy transition," Tata Power said in a statement. \n\n "DFC\'s financial support of Tata Power will help secure the supply chain in the country\'s journey for leadership in the clean energy space."',
      date: yesterday,
      imgs: [
        'https://images.assettype.com/fortuneindia%2F2022-05%2F5eec98a2-65ef-4c44-909e-060f118a81b0%2FTata_Power_DSC01550_copy.jpg?rect=31,0,1566,881&w=1250&q=60',
        'https://www.financialexpress.com/wp-content/uploads/2023/06/1-171.jpg',
        'https://www.livemint.com/lm-img/img/2023/09/11/1600x900/2-0-658644567-solarpanelfactory-0_1680250258580_1694419162919.jpg',
      ],
    },
    {
      title:
        'Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyaan (PM KUSUM)',
      content:
        ' The scheme aims to add solar and other renewable capacity of 30,800 MW by 2022 with total central financial support of Rs. 34,422 Crore including service charges to the implementing agencies.\n\n Scheme is aimed at ensuring energy security for farmers in India, along with honouring India’s commitment to increase the share of installed capacity of electric power from non-fossil-fuel sources to 40% by 2030 as part of Intended Nationally Determined Contributions (INDCs).',
      date: dayBefore,
      imgs: [
        'https://pbs.twimg.com/media/Fq_a_oLaEAAhAp9.jpg:large',
        'https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2023/06/08123158/kusum-scheme.jpg',
        'https://www.legacyias.com/wp-content/uploads/2021/04/image-9.png',
      ],
    },
    // {
    //   title: 'Ways of Disposing Hazardous Waste',
    //   content:
    //     'Hazardous waste can be disposed of through methods such as incineration, landfilling, deep-well injection, recycling and reclamation, chemical treatment, and bioremediation. Incineration involves high-temperature burning of waste, while landfilling uses specialized landfills with containment systems.',
    //   date: dayBeforeBefore,
    //   imgs: [
    //     'https://img.freepik.com/free-photo/researcher-protective-suit-collecting-plastic-garbage-into-black-waste-bag-outdoors-sunny-day_651396-2180.jpg?w=996&t=st=1688987277~exp=1688987877~hmac=e3ce0995ad78dc5732d5887fb5ff260f87a0a8f56657043ab2b725116d224048',
    //     'https://img.freepik.com/free-photo/old-rusty-junk-garbage-steel-rubber_1150-10991.jpg?size=626&ext=jpg&uid=R90103064&ga=GA1.2.239811628.1682412071&semt=ais',
    //     'https://img.freepik.com/free-photo/ecologist-taking-samples-water-with-test-tube-from-city-river-determine-level-contamination-pollution_342744-952.jpg?t=st=1688987273~exp=1688987873~hmac=693061b5b0e40137ad2b52442c214a0f560b513fd4367ad1fa76096f3df842d4',
    //   ],
    // },
  ];

  return (
    <View style={styles.container(theme)}>
      <FlatList
        data={posts}
        renderItem={({item}) => <NewsCard key={item.id} post={item} />}
        showsVerticalScrollIndicator={false}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={getArticles} />
        // }
        bouncesZoom
        bounces
        contentContainerStyle={{paddingBottom: '30%'}}
      />
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container: theme => ({
    height: '100%',
    backgroundColor: theme.colors.secondary,
  }),
});
