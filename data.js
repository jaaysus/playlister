const songs = [
  {
    "title": "JVKE - her",
    "query": "JVKE - her official audio",
    "url": "https://www.youtube.com/results?search_query=JVKE%20-%20her%20official%20audio"
  },
  {
    "title": "عبدالله ادريس حابس ابليس في الكيس",
    "query": "عبدالله ادريس حابس ابليس في الكيس official audio",
    "url": "https://www.youtube.com/results?search_query=%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%84%D9%87%20%D8%A7%D8%AF%D8%B1%D9%8A%D8%B3%20%D8%AD%D8%A7%D8%A8%D8%B3%20%D8%A7%D8%A8%D9%84%D9%8A%D8%B3%20%D9%81%D9%8A%20%D8%A7%D9%84%D9%83%D9%8A%D8%B3%20official%20audio"
  },
  {
    "title": "Dj Rotent",
    "query": "Dj Rotent official audio",
    "url": "https://www.youtube.com/results?search_query=Dj%20Rotent%20official%20audio"
  },
  {
    "title": "Odnogo",
    "query": "Odnogo official audio",
    "url": "https://www.youtube.com/results?search_query=Odnogo%20official%20audio"
  },
  {
    "title": "São Paulo",
    "query": "São Paulo official audio",
    "url": "https://www.youtube.com/results?search_query=S%C3%A3o%20Paulo%20official%20audio"
  },
  {
    "title": "Marshmello - Alone",
    "query": "Marshmello - Alone official audio",
    "url": "https://www.youtube.com/results?search_query=Marshmello%20-%20Alone%20official%20audio"
  },
  {
    "title": "Voice 260512_162848",
    "query": "Voice 260512_162848 official audio",
    "url": "https://www.youtube.com/results?search_query=Voice%20260512_162848%20official%20audio"
  },
  {
    "title": "Virtual Riot - PN-35A",
    "query": "Virtual Riot - PN-35A official audio",
    "url": "https://www.youtube.com/results?search_query=Virtual%20Riot%20-%20PN-35A%20official%20audio"
  },
  {
    "title": "JUNKIE FREEBIE",
    "query": "JUNKIE FREEBIE official audio",
    "url": "https://www.youtube.com/results?search_query=JUNKIE%20FREEBIE%20official%20audio"
  },
  {
    "title": "Benix - U ARE HERE",
    "query": "Benix - U ARE HERE official audio",
    "url": "https://www.youtube.com/results?search_query=Benix%20-%20U%20ARE%20HERE%20official%20audio"
  },
  {
    "title": "Jonas Aden - Late At Night",
    "query": "Jonas Aden - Late At Night official audio",
    "url": "https://www.youtube.com/results?search_query=Jonas%20Aden%20-%20Late%20At%20Night%20official%20audio"
  },
  {
    "title": "Lana Del Rey - Young And Beautiful",
    "query": "Lana Del Rey - Young And Beautiful official audio",
    "url": "https://www.youtube.com/results?search_query=Lana%20Del%20Rey%20-%20Young%20And%20Beautiful%20official%20audio"
  },
  {
    "title": "Skrillex, BEAM - Mumbai Power",
    "query": "Skrillex, BEAM - Mumbai Power official audio",
    "url": "https://www.youtube.com/results?search_query=Skrillex%2C%20BEAM%20-%20Mumbai%20Power%20official%20audio"
  },
  {
    "title": "ゆれる/空白人間 kuhaku_ningen/Yureru",
    "query": "ゆれる/空白人間 kuhaku_ningen/Yureru official audio",
    "url": "https://www.youtube.com/results?search_query=%E3%82%86%E3%82%8C%E3%82%8B/%E7%A9%BA%E7%99%BD%E4%BA%BA%E9%96%93%20kuhaku_ningen/Yureru%20official%20audio"
  },
  {
    "title": "UηκηΘωN - At 180",
    "query": "UηκηΘωN - At 180 official audio",
    "url": "https://www.youtube.com/results?search_query=U%CE%B7%CE%BA%CE%B7%CE%98%CF%89N%20-%20At%20180%20official%20audio"
  },
  {
    "title": "SET IT OFF",
    "query": "SET IT OFF official audio",
    "url": "https://www.youtube.com/results?search_query=SET%20IT%20OFF%20official%20audio"
  },
  {
    "title": "KATSEYE - GNARLY",
    "query": "KATSEYE - GNARLY official audio",
    "url": "https://www.youtube.com/results?search_query=KATSEYE%20-%20GNARLY%20official%20audio"
  },
  {
    "title": "Blinders - Blind Love",
    "query": "Blinders - Blind Love official audio",
    "url": "https://www.youtube.com/results?search_query=Blinders%20-%20Blind%20Love%20official%20audio"
  },
  {
    "title": "all my friends are watching",
    "query": "all my friends are watching official audio",
    "url": "https://www.youtube.com/results?search_query=all%20my%20friends%20are%20watching%20official%20audio"
  },
  {
    "title": "Icona Pop, Charli XCX - I Love It",
    "query": "Icona Pop, Charli XCX - I Love It official audio",
    "url": "https://www.youtube.com/results?search_query=Icona%20Pop%2C%20Charli%20XCX%20-%20I%20Love%20It%20official%20audio"
  },
  {
    "title": "Skrillex, Porter Robinson & Bibi Bourlley - Still Here",
    "query": "Skrillex, Porter Robinson & Bibi Bourlley - Still Here official audio",
    "url": "https://www.youtube.com/results?search_query=Skrillex%2C%20Porter%20Robinson%20%26%20Bibi%20Bourlley%20-%20Still%20Here%20official%20audio"
  },
  {
    "title": "runThis x KAYA! - Sunburn",
    "query": "runThis x KAYA! - Sunburn official audio",
    "url": "https://www.youtube.com/results?search_query=runThis%20x%20KAYA%21%20-%20Sunburn%20official%20audio"
  },
  {
    "title": "Ren - Insomnia",
    "query": "Ren - Insomnia official audio",
    "url": "https://www.youtube.com/results?search_query=Ren%20-%20Insomnia%20official%20audio"
  },
  {
    "title": "Fred again.., Skepta, PlaqueBoyMax - Victory Lap",
    "query": "Fred again.., Skepta, PlaqueBoyMax - Victory Lap official audio",
    "url": "https://www.youtube.com/results?search_query=Fred%20again..%2C%20Skepta%2C%20PlaqueBoyMax%20-%20Victory%20Lap%20official%20audio"
  },
  {
    "title": "Feel",
    "query": "Feel official audio",
    "url": "https://www.youtube.com/results?search_query=Feel%20official%20audio"
  },
  {
    "title": "RudeLies & Facading - Don't Go",
    "query": "RudeLies & Facading - Don't Go official audio",
    "url": "https://www.youtube.com/results?search_query=RudeLies%20%26%20Facading%20-%20Don%27t%20Go%20official%20audio"
  },
  {
    "title": "ClariS / Masquerade SACRA BEATS Singles",
    "query": "ClariS / Masquerade SACRA BEATS Singles official audio",
    "url": "https://www.youtube.com/results?search_query=ClariS%20/%20Masquerade%20SACRA%20BEATS%20Singles%20official%20audio"
  },
  {
    "title": "KSHMR x KAAZE - Devil Inside Me",
    "query": "KSHMR x KAAZE - Devil Inside Me official audio",
    "url": "https://www.youtube.com/results?search_query=KSHMR%20x%20KAAZE%20-%20Devil%20Inside%20Me%20official%20audio"
  },
  {
    "title": "KSHMR & Mahmut Orhan - Slow",
    "query": "KSHMR & Mahmut Orhan - Slow official audio",
    "url": "https://www.youtube.com/results?search_query=KSHMR%20%26%20Mahmut%20Orhan%20-%20Slow%20official%20audio"
  },
  {
    "title": "Vin , Conor Ross & Reece Taylor - Over U",
    "query": "Vin , Conor Ross & Reece Taylor - Over U official audio",
    "url": "https://www.youtube.com/results?search_query=Vin%20%2C%20Conor%20Ross%20%26%20Reece%20Taylor%20-%20Over%20U%20official%20audio"
  },
  {
    "title": "NOTD - Been There Done That ft. Tove Styrke",
    "query": "NOTD - Been There Done That ft. Tove Styrke official audio",
    "url": "https://www.youtube.com/results?search_query=NOTD%20-%20Been%20There%20Done%20That%20ft.%20Tove%20Styrke%20official%20audio"
  },
  {
    "title": "Grant - Lush",
    "query": "Grant - Lush official audio",
    "url": "https://www.youtube.com/results?search_query=Grant%20-%20Lush%20official%20audio"
  },
  {
    "title": "bruno mars - i just might",
    "query": "bruno mars - i just might official audio",
    "url": "https://www.youtube.com/results?search_query=bruno%20mars%20-%20i%20just%20might%20official%20audio"
  },
  {
    "title": "Voice 260424_224653",
    "query": "Voice 260424_224653 official audio",
    "url": "https://www.youtube.com/results?search_query=Voice%20260424_224653%20official%20audio"
  },
  {
    "title": "Enemy Of Truth",
    "query": "Enemy Of Truth official audio",
    "url": "https://www.youtube.com/results?search_query=Enemy%20Of%20Truth%20official%20audio"
  },
  {
    "title": "COWBELL WARRIOR!",
    "query": "COWBELL WARRIOR! official audio",
    "url": "https://www.youtube.com/results?search_query=COWBELL%20WARRIOR%21%20official%20audio"
  },
  {
    "title": "Filip Lackovic - Slavic Queen jap .mp3",
    "query": "Filip Lackovic - Slavic Queen jap .mp3 official audio",
    "url": "https://www.youtube.com/results?search_query=Filip%20Lackovic%20-%20Slavic%20Queen%20jap%20.mp3%20official%20audio"
  },
  {
    "title": "Voice 260413_213101",
    "query": "Voice 260413_213101 official audio",
    "url": "https://www.youtube.com/results?search_query=Voice%20260413_213101%20official%20audio"
  },
  {
    "title": "SHO-SENSEI!! 「道路工事」 Music",
    "query": "SHO-SENSEI!! 「道路工事」 Music official audio",
    "url": "https://www.youtube.com/results?search_query=SHO-SENSEI%21%21%20%E3%80%8C%E9%81%93%E8%B7%AF%E5%B7%A5%E4%BA%8B%E3%80%8D%20Music%20official%20audio"
  },
  {
    "title": "Voice 260408_233100",
    "query": "Voice 260408_233100 official audio",
    "url": "https://www.youtube.com/results?search_query=Voice%20260408_233100%20official%20audio"
  },
  {
    "title": "Voice 260406_175032",
    "query": "Voice 260406_175032 official audio",
    "url": "https://www.youtube.com/results?search_query=Voice%20260406_175032%20official%20audio"
  },
  {
    "title": "song name？",
    "query": "song name？ official audio",
    "url": "https://www.youtube.com/results?search_query=song%20name%EF%BC%9F%20official%20audio"
  },
  {
    "title": "影ぼう - 開拓者 , KageBow - Pioneer",
    "query": "影ぼう - 開拓者 , KageBow - Pioneer official audio",
    "url": "https://www.youtube.com/results?search_query=%E5%BD%B1%E3%81%BC%E3%81%86%20-%20%E9%96%8B%E6%8B%93%E8%80%85%20%2C%20KageBow%20-%20Pioneer%20official%20audio"
  },
  {
    "title": "Fetty Wap - Trap Queen Prod. By Tony Fadd",
    "query": "Fetty Wap - Trap Queen Prod. By Tony Fadd official audio",
    "url": "https://www.youtube.com/results?search_query=Fetty%20Wap%20-%20Trap%20Queen%20Prod.%20By%20Tony%20Fadd%20official%20audio"
  },
  {
    "title": "Grant & Ellis - Dead Man Walking",
    "query": "Grant & Ellis - Dead Man Walking official audio",
    "url": "https://www.youtube.com/results?search_query=Grant%20%26%20Ellis%20-%20Dead%20Man%20Walking%20official%20audio"
  },
  {
    "title": "Shape of minLee - The Ultimate Mashup - WATCHING Sky x minLee x Sayyad Khan",
    "query": "Shape of minLee - The Ultimate Mashup - WATCHING Sky x minLee x Sayyad Khan official audio",
    "url": "https://www.youtube.com/results?search_query=Shape%20of%20minLee%20-%20The%20Ultimate%20Mashup%20-%20WATCHING%20Sky%20x%20minLee%20x%20Sayyad%20Khan%20official%20audio"
  },
  {
    "title": "Lil Uzi Vert - What You Saying",
    "query": "Lil Uzi Vert - What You Saying official audio",
    "url": "https://www.youtube.com/results?search_query=Lil%20Uzi%20Vert%20-%20What%20You%20Saying%20official%20audio"
  },
  {
    "title": "RJ Pasin, Sueco, & WesGhost - Going Nowhere",
    "query": "RJ Pasin, Sueco, & WesGhost - Going Nowhere official audio",
    "url": "https://www.youtube.com/results?search_query=RJ%20Pasin%2C%20Sueco%2C%20%26%20WesGhost%20-%20Going%20Nowhere%20official%20audio"
  },
  {
    "title": "MVSTERIOUS, bear bear & friends - VILLAGE FUNK!",
    "query": "MVSTERIOUS, bear bear & friends - VILLAGE FUNK! official audio",
    "url": "https://www.youtube.com/results?search_query=MVSTERIOUS%2C%20bear%20bear%20%26%20friends%20-%20VILLAGE%20FUNK%21%20official%20audio"
  },
  {
    "title": "Nuggets",
    "query": "Nuggets official audio",
    "url": "https://www.youtube.com/results?search_query=Nuggets%20official%20audio"
  },
  {
    "title": "Infinite Requiem - Deoksoon",
    "query": "Infinite Requiem - Deoksoon official audio",
    "url": "https://www.youtube.com/results?search_query=Infinite%20Requiem%20-%20Deoksoon%20official%20audio"
  },
  {
    "title": "Amor Na Praia",
    "query": "Amor Na Praia official audio",
    "url": "https://www.youtube.com/results?search_query=Amor%20Na%20Praia%20official%20audio"
  },
  {
    "title": "ANDROMEDA & KVRXD - NO FEAR!",
    "query": "ANDROMEDA & KVRXD - NO FEAR! official audio",
    "url": "https://www.youtube.com/results?search_query=ANDROMEDA%20%26%20KVRXD%20-%20NO%20FEAR%21%20official%20audio"
  },
  {
    "title": "SNARESKIN - Link Up",
    "query": "SNARESKIN - Link Up official audio",
    "url": "https://www.youtube.com/results?search_query=SNARESKIN%20-%20Link%20Up%20official%20audio"
  },
  {
    "title": "mordecai",
    "query": "mordecai official audio",
    "url": "https://www.youtube.com/results?search_query=mordecai%20official%20audio"
  },
  {
    "title": "Voice 260218_144115",
    "query": "Voice 260218_144115 official audio",
    "url": "https://www.youtube.com/results?search_query=Voice%20260218_144115%20official%20audio"
  },
  {
    "title": "bxkq - LUZ ROJA",
    "query": "bxkq - LUZ ROJA official audio",
    "url": "https://www.youtube.com/results?search_query=bxkq%20-%20LUZ%20ROJA%20official%20audio"
  },
  {
    "title": "Nevereverland / ナノ Music",
    "query": "Nevereverland / ナノ Music official audio",
    "url": "https://www.youtube.com/results?search_query=Nevereverland%20/%20%E3%83%8A%E3%83%8E%20Music%20official%20audio"
  },
  {
    "title": "twenty one pilots： Stressed Out",
    "query": "twenty one pilots： Stressed Out official audio",
    "url": "https://www.youtube.com/results?search_query=twenty%20one%20pilots%EF%BC%9A%20Stressed%20Out%20official%20audio"
  },
  {
    "title": "Papaoutai - Stromae - Mikeeysmind - Tiktok Trending Version",
    "query": "Papaoutai - Stromae - Mikeeysmind - Tiktok Trending Version official audio",
    "url": "https://www.youtube.com/results?search_query=Papaoutai%20-%20Stromae%20-%20Mikeeysmind%20-%20Tiktok%20Trending%20Version%20official%20audio"
  },
  {
    "title": "YANGYINYUE - 弥渡山歌（Midu Echoing）",
    "query": "YANGYINYUE - 弥渡山歌（Midu Echoing） official audio",
    "url": "https://www.youtube.com/results?search_query=YANGYINYUE%20-%20%E5%BC%A5%E6%B8%A1%E5%B1%B1%E6%AD%8C%EF%BC%88Midu%20Echoing%EF%BC%89%20official%20audio"
  },
  {
    "title": "SamSmithVEVO - Sam Smith, Kim Petras - Unholy",
    "query": "SamSmithVEVO - Sam Smith, Kim Petras - Unholy official audio",
    "url": "https://www.youtube.com/results?search_query=SamSmithVEVO%20-%20Sam%20Smith%2C%20Kim%20Petras%20-%20Unholy%20official%20audio"
  },
  {
    "title": "Monstercat Instinct - Grant & Emily Vaughn - Move On",
    "query": "Monstercat Instinct - Grant & Emily Vaughn - Move On official audio",
    "url": "https://www.youtube.com/results?search_query=Monstercat%20Instinct%20-%20Grant%20%26%20Emily%20Vaughn%20-%20Move%20On%20official%20audio"
  },
  {
    "title": "1HXSX - REVENGE -1HXSX,wnorg17",
    "query": "1HXSX - REVENGE -1HXSX,wnorg17 official audio",
    "url": "https://www.youtube.com/results?search_query=1HXSX%20-%20REVENGE%20-1HXSX%2Cwnorg17%20official%20audio"
  },
  {
    "title": "The Vibe Guide - HEAVENLY JUMPSTYLE",
    "query": "The Vibe Guide - HEAVENLY JUMPSTYLE official audio",
    "url": "https://www.youtube.com/results?search_query=The%20Vibe%20Guide%20-%20HEAVENLY%20JUMPSTYLE%20official%20audio"
  },
  {
    "title": "DrINsaNE, Liam, Sam - JUST A BOY",
    "query": "DrINsaNE, Liam, Sam - JUST A BOY official audio",
    "url": "https://www.youtube.com/results?search_query=DrINsaNE%2C%20Liam%2C%20Sam%20-%20JUST%20A%20BOY%20official%20audio"
  },
  {
    "title": "TKANDZ - TKANDZ - Now Or Never",
    "query": "TKANDZ - TKANDZ - Now Or Never official audio",
    "url": "https://www.youtube.com/results?search_query=TKANDZ%20-%20TKANDZ%20-%20Now%20Or%20Never%20official%20audio"
  },
  {
    "title": "7clouds Phonk - Sayfalse, TRXVELER, DJ ALIM - DARE",
    "query": "7clouds Phonk - Sayfalse, TRXVELER, DJ ALIM - DARE official audio",
    "url": "https://www.youtube.com/results?search_query=7clouds%20Phonk%20-%20Sayfalse%2C%20TRXVELER%2C%20DJ%20ALIM%20-%20DARE%20official%20audio"
  },
  {
    "title": "SUKA. - NO BATIDÃO",
    "query": "SUKA. - NO BATIDÃO official audio",
    "url": "https://www.youtube.com/results?search_query=SUKA.%20-%20NO%20BATID%C3%83O%20official%20audio"
  },
  {
    "title": "Akeboshi - Wind",
    "query": "Akeboshi - Wind official audio",
    "url": "https://www.youtube.com/results?search_query=Akeboshi%20-%20Wind%20official%20audio"
  },
  {
    "title": "Basiani Ensemble - Gandagana",
    "query": "Basiani Ensemble - Gandagana official audio",
    "url": "https://www.youtube.com/results?search_query=Basiani%20Ensemble%20-%20Gandagana%20official%20audio"
  },
  {
    "title": "Aurora Vibes - Shiloh Dynasty & CuBox - Losing Interest",
    "query": "Aurora Vibes - Shiloh Dynasty & CuBox - Losing Interest official audio",
    "url": "https://www.youtube.com/results?search_query=Aurora%20Vibes%20-%20Shiloh%20Dynasty%20%26%20CuBox%20-%20Losing%20Interest%20official%20audio"
  },
  {
    "title": "Over_the_Horizon",
    "query": "Over_the_Horizon official audio",
    "url": "https://www.youtube.com/results?search_query=Over_the_Horizon%20official%20audio"
  },
  {
    "title": "Filip Lackovic - Slavic Queen",
    "query": "Filip Lackovic - Slavic Queen official audio",
    "url": "https://www.youtube.com/results?search_query=Filip%20Lackovic%20-%20Slavic%20Queen%20official%20audio"
  },
  {
    "title": "Chubina",
    "query": "Chubina official audio",
    "url": "https://www.youtube.com/results?search_query=Chubina%20official%20audio"
  },
  {
    "title": "Tom Cooper - GONER",
    "query": "Tom Cooper - GONER official audio",
    "url": "https://www.youtube.com/results?search_query=Tom%20Cooper%20-%20GONER%20official%20audio"
  },
  {
    "title": "Kamin",
    "query": "Kamin official audio",
    "url": "https://www.youtube.com/results?search_query=Kamin%20official%20audio"
  },
  {
    "title": "Alex Warren - Ordinary",
    "query": "Alex Warren - Ordinary official audio",
    "url": "https://www.youtube.com/results?search_query=Alex%20Warren%20-%20Ordinary%20official%20audio"
  },
  {
    "title": "Clair Obscur： Expedition 33 - Full Orchestral Session",
    "query": "Clair Obscur： Expedition 33 - Full Orchestral Session official audio",
    "url": "https://www.youtube.com/results?search_query=Clair%20Obscur%EF%BC%9A%20Expedition%2033%20-%20Full%20Orchestral%20Session%20official%20audio"
  },
  {
    "title": "Clair Obscur： Expedition 33 - Lumière",
    "query": "Clair Obscur： Expedition 33 - Lumière official audio",
    "url": "https://www.youtube.com/results?search_query=Clair%20Obscur%EF%BC%9A%20Expedition%2033%20-%20Lumi%C3%A8re%20official%20audio"
  },
  {
    "title": "Skeleton",
    "query": "Skeleton official audio",
    "url": "https://www.youtube.com/results?search_query=Skeleton%20official%20audio"
  },
  {
    "title": "Lil Nas X, Jack Harlow - INDUSTRY BABY",
    "query": "Lil Nas X, Jack Harlow - INDUSTRY BABY official audio",
    "url": "https://www.youtube.com/results?search_query=Lil%20Nas%20X%2C%20Jack%20Harlow%20-%20INDUSTRY%20BABY%20official%20audio"
  },
  {
    "title": "The White Stripes - Seven Nation Army",
    "query": "The White Stripes - Seven Nation Army official audio",
    "url": "https://www.youtube.com/results?search_query=The%20White%20Stripes%20-%20Seven%20Nation%20Army%20official%20audio"
  },
  {
    "title": "NEFFEX - Villains and Heroes No.211",
    "query": "NEFFEX - Villains and Heroes No.211 official audio",
    "url": "https://www.youtube.com/results?search_query=NEFFEX%20-%20Villains%20and%20Heroes%20No.211%20official%20audio"
  },
  {
    "title": "Future - Mask Off",
    "query": "Future - Mask Off official audio",
    "url": "https://www.youtube.com/results?search_query=Future%20-%20Mask%20Off%20official%20audio"
  },
  {
    "title": "MASK OFF",
    "query": "MASK OFF official audio",
    "url": "https://www.youtube.com/results?search_query=MASK%20OFF%20official%20audio"
  },
  {
    "title": "Grey - CONTRA",
    "query": "Grey - CONTRA official audio",
    "url": "https://www.youtube.com/results?search_query=Grey%20-%20CONTRA%20official%20audio"
  },
  {
    "title": "Kitty the Rose of Kilrea",
    "query": "Kitty the Rose of Kilrea official audio",
    "url": "https://www.youtube.com/results?search_query=Kitty%20the%20Rose%20of%20Kilrea%20official%20audio"
  },
  {
    "title": "Rocky Road to Dublin - Sinners",
    "query": "Rocky Road to Dublin - Sinners official audio",
    "url": "https://www.youtube.com/results?search_query=Rocky%20Road%20to%20Dublin%20-%20Sinners%20official%20audio"
  },
  {
    "title": "Myon feat. Alissa Feudo - Omen In The Rain",
    "query": "Myon feat. Alissa Feudo - Omen In The Rain official audio",
    "url": "https://www.youtube.com/results?search_query=Myon%20feat.%20Alissa%20Feudo%20-%20Omen%20In%20The%20Rain%20official%20audio"
  },
  {
    "title": "Morgan Page with HALIENE - Footprints",
    "query": "Morgan Page with HALIENE - Footprints official audio",
    "url": "https://www.youtube.com/results?search_query=Morgan%20Page%20with%20HALIENE%20-%20Footprints%20official%20audio"
  },
  {
    "title": "Skrillex ft. The Doors - Breakn' A Sweat",
    "query": "Skrillex ft. The Doors - Breakn' A Sweat official audio",
    "url": "https://www.youtube.com/results?search_query=Skrillex%20ft.%20The%20Doors%20-%20Breakn%27%20A%20Sweat%20official%20audio"
  },
  {
    "title": "NOTD, Astrid S - I Don't Know Why",
    "query": "NOTD, Astrid S - I Don't Know Why official audio",
    "url": "https://www.youtube.com/results?search_query=NOTD%2C%20Astrid%20S%20-%20I%20Don%27t%20Know%20Why%20official%20audio"
  },
  {
    "title": "ZAYN - Dusk Till Dawn ft. Sia",
    "query": "ZAYN - Dusk Till Dawn ft. Sia official audio",
    "url": "https://www.youtube.com/results?search_query=ZAYN%20-%20Dusk%20Till%20Dawn%20ft.%20Sia%20official%20audio"
  },
  {
    "title": "Clean Bandit - Rather Be feat. Jess Glynne",
    "query": "Clean Bandit - Rather Be feat. Jess Glynne official audio",
    "url": "https://www.youtube.com/results?search_query=Clean%20Bandit%20-%20Rather%20Be%20feat.%20Jess%20Glynne%20official%20audio"
  },
  {
    "title": "SILVER LINEN",
    "query": "SILVER LINEN official audio",
    "url": "https://www.youtube.com/results?search_query=SILVER%20LINEN%20official%20audio"
  },
  {
    "title": "The Black Eyed Peas - The Time",
    "query": "The Black Eyed Peas - The Time official audio",
    "url": "https://www.youtube.com/results?search_query=The%20Black%20Eyed%20Peas%20-%20The%20Time%20official%20audio"
  },
  {
    "title": "Skrillex - Scary Monsters And Nice Sprites",
    "query": "Skrillex - Scary Monsters And Nice Sprites official audio",
    "url": "https://www.youtube.com/results?search_query=Skrillex%20-%20Scary%20Monsters%20And%20Nice%20Sprites%20official%20audio"
  },
  {
    "title": "Zedd, Katy Perry - 365",
    "query": "Zedd, Katy Perry - 365 official audio",
    "url": "https://www.youtube.com/results?search_query=Zedd%2C%20Katy%20Perry%20-%20365%20official%20audio"
  },
  {
    "title": "Die For You - Zedd - - VALORANT Champions 2021",
    "query": "Die For You - Zedd - - VALORANT Champions 2021 official audio",
    "url": "https://www.youtube.com/results?search_query=Die%20For%20You%20-%20Zedd%20-%20-%20VALORANT%20Champions%202021%20official%20audio"
  },
  {
    "title": "Meghan Trainor - Mother",
    "query": "Meghan Trainor - Mother official audio",
    "url": "https://www.youtube.com/results?search_query=Meghan%20Trainor%20-%20Mother%20official%20audio"
  },
  {
    "title": "Tokyo Machine - CRAZY",
    "query": "Tokyo Machine - CRAZY official audio",
    "url": "https://www.youtube.com/results?search_query=Tokyo%20Machine%20-%20CRAZY%20official%20audio"
  },
  {
    "title": "NETTA - CEO",
    "query": "NETTA - CEO official audio",
    "url": "https://www.youtube.com/results?search_query=NETTA%20-%20CEO%20official%20audio"
  },
  {
    "title": "FUNK UNIVERSO",
    "query": "FUNK UNIVERSO official audio",
    "url": "https://www.youtube.com/results?search_query=FUNK%20UNIVERSO%20official%20audio"
  },
  {
    "title": "ATLXS - PASSO BEM SOLTO",
    "query": "ATLXS - PASSO BEM SOLTO official audio",
    "url": "https://www.youtube.com/results?search_query=ATLXS%20-%20PASSO%20BEM%20SOLTO%20official%20audio"
  },
  {
    "title": "STIM - imperium",
    "query": "STIM - imperium official audio",
    "url": "https://www.youtube.com/results?search_query=STIM%20-%20imperium%20official%20audio"
  },
  {
    "title": "Gifted Hands - One Of Them Ones",
    "query": "Gifted Hands - One Of Them Ones official audio",
    "url": "https://www.youtube.com/results?search_query=Gifted%20Hands%20-%20One%20Of%20Them%20Ones%20official%20audio"
  },
  {
    "title": "DOOM CROSSING Eternal Horizons - Music feat. Natalia Natchan aka PiNKII",
    "query": "DOOM CROSSING Eternal Horizons - Music feat. Natalia Natchan aka PiNKII official audio",
    "url": "https://www.youtube.com/results?search_query=DOOM%20CROSSING%20Eternal%20Horizons%20-%20Music%20feat.%20Natalia%20Natchan%20aka%20PiNKII%20official%20audio"
  },
  {
    "title": "Jujutsu Kaisen - Opening 1 Full『Kaikai Kitan』by Eve",
    "query": "Jujutsu Kaisen - Opening 1 Full『Kaikai Kitan』by Eve official audio",
    "url": "https://www.youtube.com/results?search_query=Jujutsu%20Kaisen%20-%20Opening%201%20Full%E3%80%8EKaikai%20Kitan%E3%80%8Fby%20Eve%20official%20audio"
  },
  {
    "title": "Crossfire, Part II",
    "query": "Crossfire, Part II official audio",
    "url": "https://www.youtube.com/results?search_query=Crossfire%2C%20Part%20II%20official%20audio"
  },
  {
    "title": "Kaikai Kitan Acoustic Version _ Cover by Takuya Okada _ Jujutsu Kaisen Op",
    "query": "Kaikai Kitan Acoustic Version _ Cover by Takuya Okada _ Jujutsu Kaisen Op official audio",
    "url": "https://www.youtube.com/results?search_query=Kaikai%20Kitan%20Acoustic%20Version%20_%20Cover%20by%20Takuya%20Okada%20_%20Jujutsu%20Kaisen%20Op%20official%20audio"
  },
  {
    "title": "Elvis Drew x AVIVIAN - Where Are You_",
    "query": "Elvis Drew x AVIVIAN - Where Are You_ official audio",
    "url": "https://www.youtube.com/results?search_query=Elvis%20Drew%20x%20AVIVIAN%20-%20Where%20Are%20You_%20official%20audio"
  },
  {
    "title": "inverness & Tails - Skeleton",
    "query": "inverness & Tails - Skeleton official audio",
    "url": "https://www.youtube.com/results?search_query=inverness%20%26%20Tails%20-%20Skeleton%20official%20audio"
  },
  {
    "title": "Kehlani - Gangsta",
    "query": "Kehlani - Gangsta official audio",
    "url": "https://www.youtube.com/results?search_query=Kehlani%20-%20Gangsta%20official%20audio"
  },
  {
    "title": "Secret That Nobody Knows - Tik Tok",
    "query": "Secret That Nobody Knows - Tik Tok official audio",
    "url": "https://www.youtube.com/results?search_query=Secret%20That%20Nobody%20Knows%20-%20Tik%20Tok%20official%20audio"
  },
  {
    "title": "UNAVERAGE GANG - UNDERWORLD",
    "query": "UNAVERAGE GANG - UNDERWORLD official audio",
    "url": "https://www.youtube.com/results?search_query=UNAVERAGE%20GANG%20-%20UNDERWORLD%20official%20audio"
  },
  {
    "title": "Troye Sivan - WILD",
    "query": "Troye Sivan - WILD official audio",
    "url": "https://www.youtube.com/results?search_query=Troye%20Sivan%20-%20WILD%20official%20audio"
  },
  {
    "title": "Camila Cabello & Grey - Crown",
    "query": "Camila Cabello & Grey - Crown official audio",
    "url": "https://www.youtube.com/results?search_query=Camila%20Cabello%20%26%20Grey%20-%20Crown%20official%20audio"
  },
  {
    "title": "Grey - Body Count",
    "query": "Grey - Body Count official audio",
    "url": "https://www.youtube.com/results?search_query=Grey%20-%20Body%20Count%20official%20audio"
  },
  {
    "title": "Grey - After You",
    "query": "Grey - After You official audio",
    "url": "https://www.youtube.com/results?search_query=Grey%20-%20After%20You%20official%20audio"
  },
  {
    "title": "Cheriimoya, Sierra Kidd - Living life in the night",
    "query": "Cheriimoya, Sierra Kidd - Living life in the night official audio",
    "url": "https://www.youtube.com/results?search_query=Cheriimoya%2C%20Sierra%20Kidd%20-%20Living%20life%20in%20the%20night%20official%20audio"
  },
  {
    "title": "Wahrân Randall Lipford et David Ling Jr. Instagram",
    "query": "Wahrân Randall Lipford et David Ling Jr. Instagram official audio",
    "url": "https://www.youtube.com/results?search_query=Wahr%C3%A2n%20Randall%20Lipford%20et%20David%20Ling%20Jr.%20Instagram%20official%20audio"
  },
  {
    "title": "Grey - FAYF _╭∩╮)",
    "query": "Grey - FAYF _╭∩╮) official audio",
    "url": "https://www.youtube.com/results?search_query=Grey%20-%20FAYF%20_%E2%95%AD%E2%88%A9%E2%95%AE%29%20official%20audio"
  },
  {
    "title": "Spirit Lead Me - Hillsong United",
    "query": "Spirit Lead Me - Hillsong United official audio",
    "url": "https://www.youtube.com/results?search_query=Spirit%20Lead%20Me%20-%20Hillsong%20United%20official%20audio"
  },
  {
    "title": "Skrillex & Starrah - Good Space",
    "query": "Skrillex & Starrah - Good Space official audio",
    "url": "https://www.youtube.com/results?search_query=Skrillex%20%26%20Starrah%20-%20Good%20Space%20official%20audio"
  },
  {
    "title": "Izzamuzzic, Julien Marchal - Shootout",
    "query": "Izzamuzzic, Julien Marchal - Shootout official audio",
    "url": "https://www.youtube.com/results?search_query=Izzamuzzic%2C%20Julien%20Marchal%20-%20Shootout%20official%20audio"
  },
  {
    "title": "RISE _ Worlds 2018 - League of Legends",
    "query": "RISE _ Worlds 2018 - League of Legends official audio",
    "url": "https://www.youtube.com/results?search_query=RISE%20_%20Worlds%202018%20-%20League%20of%20Legends%20official%20audio"
  },
  {
    "title": "Dwilly - ugh!",
    "query": "Dwilly - ugh! official audio",
    "url": "https://www.youtube.com/results?search_query=Dwilly%20-%20ugh%21%20official%20audio"
  },
  {
    "title": "Cheb Khaled - Abdelkader ya boualem 2022 Edition خالد - عبد القادر يا بوعلام",
    "query": "Cheb Khaled - Abdelkader ya boualem 2022 Edition خالد - عبد القادر يا بوعلام official audio",
    "url": "https://www.youtube.com/results?search_query=Cheb%20Khaled%20-%20Abdelkader%20ya%20boualem%202022%20Edition%20%D8%AE%D8%A7%D9%84%D8%AF%20-%20%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D9%82%D8%A7%D8%AF%D8%B1%20%D9%8A%D8%A7%20%D8%A8%D9%88%D8%B9%D9%84%D8%A7%D9%85%20official%20audio"
  },
  {
    "title": "Skrillex - Right In",
    "query": "Skrillex - Right In official audio",
    "url": "https://www.youtube.com/results?search_query=Skrillex%20-%20Right%20In%20official%20audio"
  },
  {
    "title": "Dillon Francis - IDGAFOS",
    "query": "Dillon Francis - IDGAFOS official audio",
    "url": "https://www.youtube.com/results?search_query=Dillon%20Francis%20-%20IDGAFOS%20official%20audio"
  },
  {
    "title": "Cash Cash - How To Love",
    "query": "Cash Cash - How To Love official audio",
    "url": "https://www.youtube.com/results?search_query=Cash%20Cash%20-%20How%20To%20Love%20official%20audio"
  },
  {
    "title": "Tom Odell - Another Love",
    "query": "Tom Odell - Another Love official audio",
    "url": "https://www.youtube.com/results?search_query=Tom%20Odell%20-%20Another%20Love%20official%20audio"
  },
  {
    "title": "Ellis - Feel That Way",
    "query": "Ellis - Feel That Way official audio",
    "url": "https://www.youtube.com/results?search_query=Ellis%20-%20Feel%20That%20Way%20official%20audio"
  },
  {
    "title": "Flume Ft. Vera Blue - Rushing Back",
    "query": "Flume Ft. Vera Blue - Rushing Back official audio",
    "url": "https://www.youtube.com/results?search_query=Flume%20Ft.%20Vera%20Blue%20-%20Rushing%20Back%20official%20audio"
  },
  {
    "title": "Ellis - Orbit",
    "query": "Ellis - Orbit official audio",
    "url": "https://www.youtube.com/results?search_query=Ellis%20-%20Orbit%20official%20audio"
  },
  {
    "title": "Zedd - Beautiful Now",
    "query": "Zedd - Beautiful Now official audio",
    "url": "https://www.youtube.com/results?search_query=Zedd%20-%20Beautiful%20Now%20official%20audio"
  },
  {
    "title": "K_Naan - Wavin Flag _ When I get older I will be stronger",
    "query": "K_Naan - Wavin Flag _ When I get older I will be stronger official audio",
    "url": "https://www.youtube.com/results?search_query=K_Naan%20-%20Wavin%20Flag%20_%20When%20I%20get%20older%20I%20will%20be%20stronger%20official%20audio"
  },
  {
    "title": "Grey - Chameleon",
    "query": "Grey - Chameleon official audio",
    "url": "https://www.youtube.com/results?search_query=Grey%20-%20Chameleon%20official%20audio"
  },
  {
    "title": "Zedd, Kehlani - Good Thing",
    "query": "Zedd, Kehlani - Good Thing official audio",
    "url": "https://www.youtube.com/results?search_query=Zedd%2C%20Kehlani%20-%20Good%20Thing%20official%20audio"
  },
  {
    "title": "Zedd, Elley Duhé - Happy Now",
    "query": "Zedd, Elley Duhé - Happy Now official audio",
    "url": "https://www.youtube.com/results?search_query=Zedd%2C%20Elley%20Duh%C3%A9%20-%20Happy%20Now%20official%20audio"
  },
  {
    "title": "Zedd - True Colors",
    "query": "Zedd - True Colors official audio",
    "url": "https://www.youtube.com/results?search_query=Zedd%20-%20True%20Colors%20official%20audio"
  },
  {
    "title": "Nemesy - Lacrimation",
    "query": "Nemesy - Lacrimation official audio",
    "url": "https://www.youtube.com/results?search_query=Nemesy%20-%20Lacrimation%20official%20audio"
  },
  {
    "title": "Mr. Bill & Au5 - Articulate This",
    "query": "Mr. Bill & Au5 - Articulate This official audio",
    "url": "https://www.youtube.com/results?search_query=Mr.%20Bill%20%26%20Au5%20-%20Articulate%20This%20official%20audio"
  },
  {
    "title": "Grant - Distraction feat. Nevve",
    "query": "Grant - Distraction feat. Nevve official audio",
    "url": "https://www.youtube.com/results?search_query=Grant%20-%20Distraction%20feat.%20Nevve%20official%20audio"
  },
  {
    "title": "Cartoon - On & On",
    "query": "Cartoon - On & On official audio",
    "url": "https://www.youtube.com/results?search_query=Cartoon%20-%20On%20%26%20On%20official%20audio"
  },
  {
    "title": "Zedd - Make You Say with Maren Morris & BEAUZ",
    "query": "Zedd - Make You Say with Maren Morris & BEAUZ official audio",
    "url": "https://www.youtube.com/results?search_query=Zedd%20-%20Make%20You%20Say%20with%20Maren%20Morris%20%26%20BEAUZ%20official%20audio"
  },
  {
    "title": "Jonth, Tom Wilson, Facading, MAGNUS, Jagsy, Vosai, RudeLies & Domastic - Heartless",
    "query": "Jonth, Tom Wilson, Facading, MAGNUS, Jagsy, Vosai, RudeLies & Domastic - Heartless official audio",
    "url": "https://www.youtube.com/results?search_query=Jonth%2C%20Tom%20Wilson%2C%20Facading%2C%20MAGNUS%2C%20Jagsy%2C%20Vosai%2C%20RudeLies%20%26%20Domastic%20-%20Heartless%20official%20audio"
  },
  {
    "title": "Black Coast - TRNDSTTR",
    "query": "Black Coast - TRNDSTTR official audio",
    "url": "https://www.youtube.com/results?search_query=Black%20Coast%20-%20TRNDSTTR%20official%20audio"
  },
  {
    "title": "Bali Bandits - Voulez-Vous",
    "query": "Bali Bandits - Voulez-Vous official audio",
    "url": "https://www.youtube.com/results?search_query=Bali%20Bandits%20-%20Voulez-Vous%20official%20audio"
  },
  {
    "title": "Bali Bandits - 2 Supermodels",
    "query": "Bali Bandits - 2 Supermodels official audio",
    "url": "https://www.youtube.com/results?search_query=Bali%20Bandits%20-%202%20Supermodels%20official%20audio"
  },
  {
    "title": "Alina Baraz - Trust",
    "query": "Alina Baraz - Trust official audio",
    "url": "https://www.youtube.com/results?search_query=Alina%20Baraz%20-%20Trust%20official%20audio"
  },
  {
    "title": "Virtual Riot - Bossfight Afterparty",
    "query": "Virtual Riot - Bossfight Afterparty official audio",
    "url": "https://www.youtube.com/results?search_query=Virtual%20Riot%20-%20Bossfight%20Afterparty%20official%20audio"
  },
  {
    "title": "CSS #18 - Mr. Bill & Of The Trees - Pish Posh",
    "query": "CSS #18 - Mr. Bill & Of The Trees - Pish Posh official audio",
    "url": "https://www.youtube.com/results?search_query=CSS%20%2318%20-%20Mr.%20Bill%20%26%20Of%20The%20Trees%20-%20Pish%20Posh%20official%20audio"
  },
  {
    "title": "Friendzone ft. KARRA - Lost In Your Love",
    "query": "Friendzone ft. KARRA - Lost In Your Love official audio",
    "url": "https://www.youtube.com/results?search_query=Friendzone%20ft.%20KARRA%20-%20Lost%20In%20Your%20Love%20official%20audio"
  },
  {
    "title": "YOASOBI「怪物」 Music",
    "query": "YOASOBI「怪物」 Music official audio",
    "url": "https://www.youtube.com/results?search_query=YOASOBI%E3%80%8C%E6%80%AA%E7%89%A9%E3%80%8D%20Music%20official%20audio"
  },
  {
    "title": "YOASOBI - Racing Into The Night",
    "query": "YOASOBI - Racing Into The Night official audio",
    "url": "https://www.youtube.com/results?search_query=YOASOBI%20-%20Racing%20Into%20The%20Night%20official%20audio"
  },
  {
    "title": "- Nitro Fun - Final Boss",
    "query": "- Nitro Fun - Final Boss official audio",
    "url": "https://www.youtube.com/results?search_query=-%20Nitro%20Fun%20-%20Final%20Boss%20official%20audio"
  },
  {
    "title": "Hott Headzz - Hmmm _Unexpected like a mixtape_",
    "query": "Hott Headzz - Hmmm _Unexpected like a mixtape_ official audio",
    "url": "https://www.youtube.com/results?search_query=Hott%20Headzz%20-%20Hmmm%20_Unexpected%20like%20a%20mixtape_%20official%20audio"
  },
  {
    "title": "Fox Stevenson - Get Through",
    "query": "Fox Stevenson - Get Through official audio",
    "url": "https://www.youtube.com/results?search_query=Fox%20Stevenson%20-%20Get%20Through%20official%20audio"
  },
  {
    "title": "Tisoki & Grabbitz - Rolls Royce",
    "query": "Tisoki & Grabbitz - Rolls Royce official audio",
    "url": "https://www.youtube.com/results?search_query=Tisoki%20%26%20Grabbitz%20-%20Rolls%20Royce%20official%20audio"
  },
  {
    "title": "Grant - The Edge",
    "query": "Grant - The Edge official audio",
    "url": "https://www.youtube.com/results?search_query=Grant%20-%20The%20Edge%20official%20audio"
  },
  {
    "title": "Tisoki - Don_t Lie",
    "query": "Tisoki - Don_t Lie official audio",
    "url": "https://www.youtube.com/results?search_query=Tisoki%20-%20Don_t%20Lie%20official%20audio"
  },
  {
    "title": "Grant & RUNN - Fix It",
    "query": "Grant & RUNN - Fix It official audio",
    "url": "https://www.youtube.com/results?search_query=Grant%20%26%20RUNN%20-%20Fix%20It%20official%20audio"
  },
  {
    "title": "Ellis & NOËP - Speak Français",
    "query": "Ellis & NOËP - Speak Français official audio",
    "url": "https://www.youtube.com/results?search_query=Ellis%20%26%20NOE%CC%88P%20-%20Speak%20Franc%CC%A7ais%20official%20audio"
  },
  {
    "title": "Rio 2 Soundtrack - Track 14 - What Is Love by Janelle Monáe, Anne Hathaway, Jesse Eisenberg",
    "query": "Rio 2 Soundtrack - Track 14 - What Is Love by Janelle Monáe, Anne Hathaway, Jesse Eisenberg official audio",
    "url": "https://www.youtube.com/results?search_query=Rio%202%20Soundtrack%20-%20Track%2014%20-%20What%20Is%20Love%20by%20Janelle%20Mon%C3%A1e%2C%20Anne%20Hathaway%2C%20Jesse%20Eisenberg%20official%20audio"
  },
  {
    "title": "Mo Falk - I Gotchu",
    "query": "Mo Falk - I Gotchu official audio",
    "url": "https://www.youtube.com/results?search_query=Mo%20Falk%20-%20I%20Gotchu%20official%20audio"
  },
  {
    "title": "Hot Action Cop - Fever for the Flava",
    "query": "Hot Action Cop - Fever for the Flava official audio",
    "url": "https://www.youtube.com/results?search_query=Hot%20Action%20Cop%20-%20Fever%20for%20the%20Flava%20official%20audio"
  },
  {
    "title": "Give Me Everything - Pitbull ft. Neyo, Nayer & Afrojack w_ on screen & download",
    "query": "Give Me Everything - Pitbull ft. Neyo, Nayer & Afrojack w_ on screen & download official audio",
    "url": "https://www.youtube.com/results?search_query=Give%20Me%20Everything%20-%20Pitbull%20ft.%20Neyo%2C%20Nayer%20%26%20Afrojack%20w_%20on%20screen%20%26%20download%20official%20audio"
  },
  {
    "title": "Flowers with English & Romaji",
    "query": "Flowers with English & Romaji official audio",
    "url": "https://www.youtube.com/results?search_query=Flowers%20with%20English%20%26%20Romaji%20official%20audio"
  },
  {
    "title": "Central Cee - Doja _How can I be homophobic_ My bitch is gay_",
    "query": "Central Cee - Doja _How can I be homophobic_ My bitch is gay_ official audio",
    "url": "https://www.youtube.com/results?search_query=Central%20Cee%20-%20Doja%20_How%20can%20I%20be%20homophobic_%20My%20bitch%20is%20gay_%20official%20audio"
  },
  {
    "title": "Brighter Than Gold - Louis II",
    "query": "Brighter Than Gold - Louis II official audio",
    "url": "https://www.youtube.com/results?search_query=Brighter%20Than%20Gold%20-%20Louis%20II%20official%20audio"
  },
  {
    "title": "Gotye - Somebody That I Used to Know feat. Kimbra _ Full Version #voice #voceux # #acapella",
    "query": "Gotye - Somebody That I Used to Know feat. Kimbra _ Full Version #voice #voceux # #acapella official audio",
    "url": "https://www.youtube.com/results?search_query=Gotye%20-%20Somebody%20That%20I%20Used%20to%20Know%20feat.%20Kimbra%20_%20Full%20Version%20%23voice%20%23voceux%20%23%20%23acapella%20official%20audio"
  },
  {
    "title": "Flo Rida - GDFR",
    "query": "Flo Rida - GDFR official audio",
    "url": "https://www.youtube.com/results?search_query=Flo%20Rida%20-%20GDFR%20official%20audio"
  },
  {
    "title": "Calvin Harris - Outside ft. Ellie Goulding i ll show you what it feels like",
    "query": "Calvin Harris - Outside ft. Ellie Goulding i ll show you what it feels like official audio",
    "url": "https://www.youtube.com/results?search_query=Calvin%20Harris%20-%20Outside%20ft.%20Ellie%20Goulding%20i%20ll%20show%20you%20what%20it%20feels%20like%20official%20audio"
  },
  {
    "title": "DJ Gimi-O x Habibi",
    "query": "DJ Gimi-O x Habibi official audio",
    "url": "https://www.youtube.com/results?search_query=DJ%20Gimi-O%20x%20Habibi%20official%20audio"
  },
  {
    "title": "Egzod & Maestro Chives - Royalty ft. Neoni",
    "query": "Egzod & Maestro Chives - Royalty ft. Neoni official audio",
    "url": "https://www.youtube.com/results?search_query=Egzod%20%26%20Maestro%20Chives%20-%20Royalty%20ft.%20Neoni%20official%20audio"
  },
  {
    "title": "Hozier - Take Me To Church",
    "query": "Hozier - Take Me To Church official audio",
    "url": "https://www.youtube.com/results?search_query=Hozier%20-%20Take%20Me%20To%20Church%20official%20audio"
  },
  {
    "title": "Drive forever",
    "query": "Drive forever official audio",
    "url": "https://www.youtube.com/results?search_query=Drive%20forever%20official%20audio"
  },
  {
    "title": "DEATH NOTE FREESTYLE",
    "query": "DEATH NOTE FREESTYLE official audio",
    "url": "https://www.youtube.com/results?search_query=DEATH%20NOTE%20FREESTYLE%20official%20audio"
  },
  {
    "title": "Alexander Rybak - Fairytale",
    "query": "Alexander Rybak - Fairytale official audio",
    "url": "https://www.youtube.com/results?search_query=Alexander%20Rybak%20-%20Fairytale%20official%20audio"
  },
  {
    "title": "Jarvis - น้ำแดงน้ำส้ม Prod.Bossa On The beat",
    "query": "Jarvis - น้ำแดงน้ำส้ม Prod.Bossa On The beat official audio",
    "url": "https://www.youtube.com/results?search_query=Jarvis%20-%20%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%81%E0%B8%94%E0%B8%87%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AA%E0%B9%89%E0%B8%A1%20Prod.Bossa%20On%20The%20beat%20official%20audio"
  },
  {
    "title": "Ali Gatie - It s You",
    "query": "Ali Gatie - It s You official audio",
    "url": "https://www.youtube.com/results?search_query=Ali%20Gatie%20-%20It%20s%20You%20official%20audio"
  },
  {
    "title": "Benzz - Je M appelle ft. Tion Wayne & French Montana GRM Daily",
    "query": "Benzz - Je M appelle ft. Tion Wayne & French Montana GRM Daily official audio",
    "url": "https://www.youtube.com/results?search_query=Benzz%20-%20Je%20M%20appelle%20ft.%20Tion%20Wayne%20%26%20French%20Montana%20GRM%20Daily%20official%20audio"
  },
  {
    "title": "Jason Derulo - SAVAGE LOVE Prod. Jawsh 685",
    "query": "Jason Derulo - SAVAGE LOVE Prod. Jawsh 685 official audio",
    "url": "https://www.youtube.com/results?search_query=Jason%20Derulo%20-%20SAVAGE%20LOVE%20Prod.%20Jawsh%20685%20official%20audio"
  },
  {
    "title": "Complete - Jordan",
    "query": "Complete - Jordan official audio",
    "url": "https://www.youtube.com/results?search_query=Complete%20-%20Jordan%20official%20audio"
  },
  {
    "title": "Benzz - Je M appelle GRM Daily",
    "query": "Benzz - Je M appelle GRM Daily official audio",
    "url": "https://www.youtube.com/results?search_query=Benzz%20-%20Je%20M%20appelle%20GRM%20Daily%20official%20audio"
  },
  {
    "title": "indila love story",
    "query": "indila love story official audio",
    "url": "https://www.youtube.com/results?search_query=indila%20love%20story%20official%20audio"
  },
  {
    "title": "Gustavo Bravetti - Babel",
    "query": "Gustavo Bravetti - Babel official audio",
    "url": "https://www.youtube.com/results?search_query=Gustavo%20Bravetti%20-%20Babel%20official%20audio"
  },
  {
    "title": "Arman Cekin & Faydee - Better Days ft. Karra",
    "query": "Arman Cekin & Faydee - Better Days ft. Karra official audio",
    "url": "https://www.youtube.com/results?search_query=Arman%20Cekin%20%26%20Faydee%20-%20Better%20Days%20ft.%20Karra%20official%20audio"
  },
  {
    "title": "Imagine Dragons, JID - Enemy",
    "query": "Imagine Dragons, JID - Enemy official audio",
    "url": "https://www.youtube.com/results?search_query=Imagine%20Dragons%2C%20JID%20-%20Enemy%20official%20audio"
  },
  {
    "title": "NF - Lost In The Moment ft. Andreas Moss",
    "query": "NF - Lost In The Moment ft. Andreas Moss official audio",
    "url": "https://www.youtube.com/results?search_query=NF%20-%20Lost%20In%20The%20Moment%20ft.%20Andreas%20Moss%20official%20audio"
  },
  {
    "title": "Elley Duhé - Middie of the Night",
    "query": "Elley Duhé - Middie of the Night official audio",
    "url": "https://www.youtube.com/results?search_query=Elley%20Duh%C3%A9%20-%20Middie%20of%20the%20Night%20official%20audio"
  },
  {
    "title": "FLOW - Go",
    "query": "FLOW - Go official audio",
    "url": "https://www.youtube.com/results?search_query=FLOW%20-%20Go%20official%20audio"
  },
  {
    "title": "Lil Nas X, Katy Perry - Industry Baby vs. E.T.",
    "query": "Lil Nas X, Katy Perry - Industry Baby vs. E.T. official audio",
    "url": "https://www.youtube.com/results?search_query=Lil%20Nas%20X%2C%20Katy%20Perry%20-%20Industry%20Baby%20vs.%20E.T.%20official%20audio"
  },
  {
    "title": "SEVENTEEN - HIGHLIGHT",
    "query": "SEVENTEEN - HIGHLIGHT official audio",
    "url": "https://www.youtube.com/results?search_query=SEVENTEEN%20-%20HIGHLIGHT%20official%20audio"
  },
  {
    "title": "AUD-20210728-WA0122",
    "query": "AUD-20210728-WA0122 official audio",
    "url": "https://www.youtube.com/results?search_query=AUD-20210728-WA0122%20official%20audio"
  },
  {
    "title": "ATEEZ - HALA HALA",
    "query": "ATEEZ - HALA HALA official audio",
    "url": "https://www.youtube.com/results?search_query=ATEEZ%20-%20HALA%20HALA%20official%20audio"
  },
  {
    "title": "Ew x Hello, Mother Fker x Blood Oceans Mirror Mirror Sat On The Wall",
    "query": "Ew x Hello, Mother Fker x Blood Oceans Mirror Mirror Sat On The Wall official audio",
    "url": "https://www.youtube.com/results?search_query=Ew%20x%20Hello%2C%20Mother%20Fker%20x%20Blood%20Oceans%20Mirror%20Mirror%20Sat%20On%20The%20Wall%20official%20audio"
  },
  {
    "title": "GHOSTEMANE - FED UP",
    "query": "GHOSTEMANE - FED UP official audio",
    "url": "https://www.youtube.com/results?search_query=GHOSTEMANE%20-%20FED%20UP%20official%20audio"
  },
  {
    "title": "Eminem-Venom-Downloaded-from-celebnob.com",
    "query": "Eminem-Venom-Downloaded-from-celebnob.com official audio",
    "url": "https://www.youtube.com/results?search_query=Eminem-Venom-Downloaded-from-celebnob.com%20official%20audio"
  },
  {
    "title": "KEN THE 390 - I m Ready",
    "query": "KEN THE 390 - I m Ready official audio",
    "url": "https://www.youtube.com/results?search_query=KEN%20THE%20390%20-%20I%20m%20Ready%20official%20audio"
  },
  {
    "title": "Eminem - Venom Ringtone",
    "query": "Eminem - Venom Ringtone official audio",
    "url": "https://www.youtube.com/results?search_query=Eminem%20-%20Venom%20Ringtone%20official%20audio"
  },
  {
    "title": "ATEEZ - Answer Japanese",
    "query": "ATEEZ - Answer Japanese official audio",
    "url": "https://www.youtube.com/results?search_query=ATEEZ%20-%20Answer%20Japanese%20official%20audio"
  },
  {
    "title": "ATEEZ - WONDERLAND By Hy X",
    "query": "ATEEZ - WONDERLAND By Hy X official audio",
    "url": "https://www.youtube.com/results?search_query=ATEEZ%20-%20WONDERLAND%20By%20Hy%20X%20official%20audio"
  },
  {
    "title": "Face off x Scary garry",
    "query": "Face off x Scary garry official audio",
    "url": "https://www.youtube.com/results?search_query=Face%20off%20x%20Scary%20garry%20official%20audio"
  },
  {
    "title": "Eminem - Venom",
    "query": "Eminem - Venom official audio",
    "url": "https://www.youtube.com/results?search_query=Eminem%20-%20Venom%20official%20audio"
  },
  {
    "title": "Ducked Ape - Lost In Escape",
    "query": "Ducked Ape - Lost In Escape official audio",
    "url": "https://www.youtube.com/results?search_query=Ducked%20Ape%20-%20Lost%20In%20Escape%20official%20audio"
  },
  {
    "title": "MAX - Lights Down Low",
    "query": "MAX - Lights Down Low official audio",
    "url": "https://www.youtube.com/results?search_query=MAX%20-%20Lights%20Down%20Low%20official%20audio"
  },
  {
    "title": "Lil Jon - Snap Yo Fingers",
    "query": "Lil Jon - Snap Yo Fingers official audio",
    "url": "https://www.youtube.com/results?search_query=Lil%20Jon%20-%20Snap%20Yo%20Fingers%20official%20audio"
  },
  {
    "title": "NF - Let You Down",
    "query": "NF - Let You Down official audio",
    "url": "https://www.youtube.com/results?search_query=NF%20-%20Let%20You%20Down%20official%20audio"
  },
  {
    "title": "Dedication,Hard Work Keep your Head up and keep grinding",
    "query": "Dedication,Hard Work Keep your Head up and keep grinding official audio",
    "url": "https://www.youtube.com/results?search_query=Dedication%2CHard%20Work%20Keep%20your%20Head%20up%20and%20keep%20grinding%20official%20audio"
  },
  {
    "title": "Eminem ft. Clean Bandit - Rather Be Without Me",
    "query": "Eminem ft. Clean Bandit - Rather Be Without Me official audio",
    "url": "https://www.youtube.com/results?search_query=Eminem%20ft.%20Clean%20Bandit%20-%20Rather%20Be%20Without%20Me%20official%20audio"
  },
  {
    "title": "NEFFEX - Manifest It 🔮",
    "query": "NEFFEX - Manifest It 🔮 official audio",
    "url": "https://www.youtube.com/results?search_query=NEFFEX%20-%20Manifest%20It%20%F0%9F%94%AE%20official%20audio"
  },
  {
    "title": "NF - Only Eminem feat",
    "query": "NF - Only Eminem feat official audio",
    "url": "https://www.youtube.com/results?search_query=NF%20-%20Only%20Eminem%20feat%20official%20audio"
  },
  {
    "title": "Enemy",
    "query": "Enemy official audio",
    "url": "https://www.youtube.com/results?search_query=Enemy%20official%20audio"
  },
  {
    "title": "Brooksie - Dude She’s Just Not Into You TikTok Song",
    "query": "Brooksie - Dude She’s Just Not Into You TikTok Song official audio",
    "url": "https://www.youtube.com/results?search_query=Brooksie%20-%20Dude%20She%E2%80%99s%20Just%20Not%20Into%20You%20TikTok%20Song%20official%20audio"
  },
  {
    "title": "Lukas Graham - Share That Love feat. G-Eazy",
    "query": "Lukas Graham - Share That Love feat. G-Eazy official audio",
    "url": "https://www.youtube.com/results?search_query=Lukas%20Graham%20-%20Share%20That%20Love%20feat.%20G-Eazy%20official%20audio"
  },
  {
    "title": "Lukas Graham - Love Someone",
    "query": "Lukas Graham - Love Someone official audio",
    "url": "https://www.youtube.com/results?search_query=Lukas%20Graham%20-%20Love%20Someone%20official%20audio"
  },
  {
    "title": "【】Fate stay night II.Lost Butterfly - Aimer - I beg you【中日字幕】",
    "query": "【】Fate stay night II.Lost Butterfly - Aimer - I beg you【中日字幕】 official audio",
    "url": "https://www.youtube.com/results?search_query=%E3%80%90%E3%80%91Fate%20stay%20night%20II.Lost%20Butterfly%20-%20Aimer%20-%20I%20beg%20you%E3%80%90%E4%B8%AD%E6%97%A5%E5%AD%97%E5%B9%95%E3%80%91%20official%20audio"
  },
  {
    "title": "Darkness",
    "query": "Darkness official audio",
    "url": "https://www.youtube.com/results?search_query=Darkness%20official%20audio"
  },
  {
    "title": "Nice_Ocean_Waves",
    "query": "Nice_Ocean_Waves official audio",
    "url": "https://www.youtube.com/results?search_query=Nice_Ocean_Waves%20official%20audio"
  },
  {
    "title": "【热爱105°C的你 阿肆 Super Idol】Japanese Cover",
    "query": "【热爱105°C的你 阿肆 Super Idol】Japanese Cover official audio",
    "url": "https://www.youtube.com/results?search_query=%E3%80%90%E7%83%AD%E7%88%B1105%C2%B0C%E7%9A%84%E4%BD%A0%20%E9%98%BF%E8%82%86%20Super%20Idol%E3%80%91Japanese%20Cover%20official%20audio"
  },
  {
    "title": "Eminem - Whoopty",
    "query": "Eminem - Whoopty official audio",
    "url": "https://www.youtube.com/results?search_query=Eminem%20-%20Whoopty%20official%20audio"
  },
  {
    "title": "Eminem - Whoopty 2021",
    "query": "Eminem - Whoopty 2021 official audio",
    "url": "https://www.youtube.com/results?search_query=Eminem%20-%20Whoopty%202021%20official%20audio"
  },
  {
    "title": "2Pac ft. Eminem & CJ - Whoopty",
    "query": "2Pac ft. Eminem & CJ - Whoopty official audio",
    "url": "https://www.youtube.com/results?search_query=2Pac%20ft.%20Eminem%20%26%20CJ%20-%20Whoopty%20official%20audio"
  },
  {
    "title": "DaBaby x 42 Dugg Type Beat - WHISTLE",
    "query": "DaBaby x 42 Dugg Type Beat - WHISTLE official audio",
    "url": "https://www.youtube.com/results?search_query=DaBaby%20x%2042%20Dugg%20Type%20Beat%20-%20WHISTLE%20official%20audio"
  },
  {
    "title": "Dreamville - Under The Sun ft. J. Cole, DaBaby, Lute",
    "query": "Dreamville - Under The Sun ft. J. Cole, DaBaby, Lute official audio",
    "url": "https://www.youtube.com/results?search_query=Dreamville%20-%20Under%20The%20Sun%20ft.%20J.%20Cole%2C%20DaBaby%2C%20Lute%20official%20audio"
  },
  {
    "title": "Idaten Deities in the Peaceful Generation - Opening Full - Seija no Koushin Tatsuya Kitani",
    "query": "Idaten Deities in the Peaceful Generation - Opening Full - Seija no Koushin Tatsuya Kitani official audio",
    "url": "https://www.youtube.com/results?search_query=Idaten%20Deities%20in%20the%20Peaceful%20Generation%20-%20Opening%20Full%20-%20Seija%20no%20Koushin%20Tatsuya%20Kitani%20official%20audio"
  },
  {
    "title": "Guess_whos_back",
    "query": "Guess_whos_back official audio",
    "url": "https://www.youtube.com/results?search_query=Guess_whos_back%20official%20audio"
  },
  {
    "title": "Gandagana Georgian Trap Music",
    "query": "Gandagana Georgian Trap Music official audio",
    "url": "https://www.youtube.com/results?search_query=Gandagana%20Georgian%20Trap%20Music%20official%20audio"
  },
  {
    "title": "Kim Dracula - Paparazzi",
    "query": "Kim Dracula - Paparazzi official audio",
    "url": "https://www.youtube.com/results?search_query=Kim%20Dracula%20-%20Paparazzi%20official%20audio"
  },
  {
    "title": "CJ - Whoopty",
    "query": "CJ - Whoopty official audio",
    "url": "https://www.youtube.com/results?search_query=CJ%20-%20Whoopty%20official%20audio"
  },
  {
    "title": "Måneskin - Beggin I m beggin , beggin you",
    "query": "Måneskin - Beggin I m beggin , beggin you official audio",
    "url": "https://www.youtube.com/results?search_query=M%C3%A5neskin%20-%20Beggin%20I%20m%20beggin%20%2C%20beggin%20you%20official%20audio"
  },
  {
    "title": "Jojo ost Moroccan 💥💥",
    "query": "Jojo ost Moroccan 💥💥 official audio",
    "url": "https://www.youtube.com/results?search_query=Jojo%20ost%20Moroccan%20%F0%9F%92%A5%F0%9F%92%A5%20official%20audio"
  },
  {
    "title": "Dr. Dre - The Next Episode",
    "query": "Dr. Dre - The Next Episode official audio",
    "url": "https://www.youtube.com/results?search_query=Dr.%20Dre%20-%20The%20Next%20Episode%20official%20audio"
  },
  {
    "title": "2Pac - Time Back",
    "query": "2Pac - Time Back official audio",
    "url": "https://www.youtube.com/results?search_query=2Pac%20-%20Time%20Back%20official%20audio"
  },
  {
    "title": "NF - Change",
    "query": "NF - Change official audio",
    "url": "https://www.youtube.com/results?search_query=NF%20-%20Change%20official%20audio"
  },
  {
    "title": "Martin Garrix & David Guetta - So Far Away feat. Jamie Scott & Romy Dya",
    "query": "Martin Garrix & David Guetta - So Far Away feat. Jamie Scott & Romy Dya official audio",
    "url": "https://www.youtube.com/results?search_query=Martin%20Garrix%20%26%20David%20Guetta%20-%20So%20Far%20Away%20feat.%20Jamie%20Scott%20%26%20Romy%20Dya%20official%20audio"
  },
  {
    "title": "King Gnu - Prayer X",
    "query": "King Gnu - Prayer X official audio",
    "url": "https://www.youtube.com/results?search_query=King%20Gnu%20-%20Prayer%20X%20official%20audio"
  },
  {
    "title": "【】Fate Grand Order - 絕對魔獸戰線巴比倫尼亞 - ED3 - milet - Tell me【中日字幕】",
    "query": "【】Fate Grand Order - 絕對魔獸戰線巴比倫尼亞 - ED3 - milet - Tell me【中日字幕】 official audio",
    "url": "https://www.youtube.com/results?search_query=%E3%80%90%E3%80%91Fate%20Grand%20Order%20-%20%E7%B5%95%E5%B0%8D%E9%AD%94%E7%8D%B8%E6%88%B0%E7%B7%9A%E5%B7%B4%E6%AF%94%E5%80%AB%E5%B0%BC%E4%BA%9E%20-%20ED3%20-%20milet%20-%20Tell%20me%E3%80%90%E4%B8%AD%E6%97%A5%E5%AD%97%E5%B9%95%E3%80%91%20official%20audio"
  },
  {
    "title": "Crickets - Gaming Sound Effect",
    "query": "Crickets - Gaming Sound Effect official audio",
    "url": "https://www.youtube.com/results?search_query=Crickets%20-%20Gaming%20Sound%20Effect%20official%20audio"
  },
  {
    "title": "Phút Hơn _ Pháo ft. Zius Lit",
    "query": "Phút Hơn _ Pháo ft. Zius Lit official audio",
    "url": "https://www.youtube.com/results?search_query=Ph%C3%BAt%20H%C6%A1n%20_%20Ph%C3%A1o%20ft.%20Zius%20Lit%20official%20audio"
  },
  {
    "title": "NF - Outcast",
    "query": "NF - Outcast official audio",
    "url": "https://www.youtube.com/results?search_query=NF%20-%20Outcast%20official%20audio"
  },
  {
    "title": "NF - NO NAME",
    "query": "NF - NO NAME official audio",
    "url": "https://www.youtube.com/results?search_query=NF%20-%20NO%20NAME%20official%20audio"
  },
  {
    "title": "NF - One Hundred",
    "query": "NF - One Hundred official audio",
    "url": "https://www.youtube.com/results?search_query=NF%20-%20One%20Hundred%20official%20audio"
  },
  {
    "title": "NF - Dreams",
    "query": "NF - Dreams official audio",
    "url": "https://www.youtube.com/results?search_query=NF%20-%20Dreams%20official%20audio"
  },
  {
    "title": "NF - Intro II",
    "query": "NF - Intro II official audio",
    "url": "https://www.youtube.com/results?search_query=NF%20-%20Intro%20II%20official%20audio"
  },
  {
    "title": "Michel Telo ft. Pitbull - Ai Se Eu Te Pego",
    "query": "Michel Telo ft. Pitbull - Ai Se Eu Te Pego official audio",
    "url": "https://www.youtube.com/results?search_query=Michel%20Telo%20ft.%20Pitbull%20-%20Ai%20Se%20Eu%20Te%20Pego%20official%20audio"
  },
  {
    "title": "Imran Khan - Satisfya",
    "query": "Imran Khan - Satisfya official audio",
    "url": "https://www.youtube.com/results?search_query=Imran%20Khan%20-%20Satisfya%20official%20audio"
  },
  {
    "title": "Eminem, Obie Trice & Tony Yayo Drama Setter",
    "query": "Eminem, Obie Trice & Tony Yayo Drama Setter official audio",
    "url": "https://www.youtube.com/results?search_query=Eminem%2C%20Obie%20Trice%20%26%20Tony%20Yayo%20Drama%20Setter%20official%20audio"
  },
  {
    "title": "Deja Vu sound effect",
    "query": "Deja Vu sound effect official audio",
    "url": "https://www.youtube.com/results?search_query=Deja%20Vu%20sound%20effect%20official%20audio"
  },
  {
    "title": "BIG SHAQ - MANS NOT HOT",
    "query": "BIG SHAQ - MANS NOT HOT official audio",
    "url": "https://www.youtube.com/results?search_query=BIG%20SHAQ%20-%20MANS%20NOT%20HOT%20official%20audio"
  },
  {
    "title": "Alok, Martin Jensen, Jason Derulo - Don t Cry For Me",
    "query": "Alok, Martin Jensen, Jason Derulo - Don t Cry For Me official audio",
    "url": "https://www.youtube.com/results?search_query=Alok%2C%20Martin%20Jensen%2C%20Jason%20Derulo%20-%20Don%20t%20Cry%20For%20Me%20official%20audio"
  },
  {
    "title": "Alan Walker {Faded Rap}",
    "query": "Alan Walker {Faded Rap} official audio",
    "url": "https://www.youtube.com/results?search_query=Alan%20Walker%20%7BFaded%20Rap%7D%20official%20audio"
  },
  {
    "title": "Eminem - Walk on Water",
    "query": "Eminem - Walk on Water official audio",
    "url": "https://www.youtube.com/results?search_query=Eminem%20-%20Walk%20on%20Water%20official%20audio"
  },
  {
    "title": "Duncan Laurence - Arcade",
    "query": "Duncan Laurence - Arcade official audio",
    "url": "https://www.youtube.com/results?search_query=Duncan%20Laurence%20-%20Arcade%20official%20audio"
  },
  {
    "title": "Bobby McFerrin - Don t Worry Be Happy",
    "query": "Bobby McFerrin - Don t Worry Be Happy official audio",
    "url": "https://www.youtube.com/results?search_query=Bobby%20McFerrin%20-%20Don%20t%20Worry%20Be%20Happy%20official%20audio"
  },
  {
    "title": "On The Sleeve",
    "query": "On The Sleeve official audio",
    "url": "https://www.youtube.com/results?search_query=On%20The%20Sleeve%20official%20audio"
  },
  {
    "title": "BELIEVE",
    "query": "BELIEVE official audio",
    "url": "https://www.youtube.com/results?search_query=BELIEVE%20official%20audio"
  },
  {
    "title": "Chinese Rap Full",
    "query": "Chinese Rap Full official audio",
    "url": "https://www.youtube.com/results?search_query=Chinese%20Rap%20Full%20official%20audio"
  },
  {
    "title": "Can You Keep Up - Busta Rhymes ft. Twista",
    "query": "Can You Keep Up - Busta Rhymes ft. Twista official audio",
    "url": "https://www.youtube.com/results?search_query=Can%20You%20Keep%20Up%20-%20Busta%20Rhymes%20ft.%20Twista%20official%20audio"
  },
  {
    "title": "Eminem - River ft. Ed Sheeran",
    "query": "Eminem - River ft. Ed Sheeran official audio",
    "url": "https://www.youtube.com/results?search_query=Eminem%20-%20River%20ft.%20Ed%20Sheeran%20official%20audio"
  },
  {
    "title": "Ed Sheeran - Remember The Name",
    "query": "Ed Sheeran - Remember The Name official audio",
    "url": "https://www.youtube.com/results?search_query=Ed%20Sheeran%20-%20Remember%20The%20Name%20official%20audio"
  },
  {
    "title": "Jonezen American Dream",
    "query": "Jonezen American Dream official audio",
    "url": "https://www.youtube.com/results?search_query=Jonezen%20American%20Dream%20official%20audio"
  },
  {
    "title": "Andreas B. - Elements",
    "query": "Andreas B. - Elements official audio",
    "url": "https://www.youtube.com/results?search_query=Andreas%20B.%20-%20Elements%20official%20audio"
  },
  {
    "title": "My Demons - Starset",
    "query": "My Demons - Starset official audio",
    "url": "https://www.youtube.com/results?search_query=My%20Demons%20-%20Starset%20official%20audio"
  },
  {
    "title": "Diamond Eyes - Everything",
    "query": "Diamond Eyes - Everything official audio",
    "url": "https://www.youtube.com/results?search_query=Diamond%20Eyes%20-%20Everything%20official%20audio"
  },
  {
    "title": "Ester Dean - Take You To Rio",
    "query": "Ester Dean - Take You To Rio official audio",
    "url": "https://www.youtube.com/results?search_query=Ester%20Dean%20-%20Take%20You%20To%20Rio%20official%20audio"
  },
  {
    "title": "Jonezen Change",
    "query": "Jonezen Change official audio",
    "url": "https://www.youtube.com/results?search_query=Jonezen%20Change%20official%20audio"
  },
  {
    "title": "JONEZEN Losing Myself",
    "query": "JONEZEN Losing Myself official audio",
    "url": "https://www.youtube.com/results?search_query=JONEZEN%20Losing%20Myself%20official%20audio"
  },
  {
    "title": "Joel Adams - Please Don t Go",
    "query": "Joel Adams - Please Don t Go official audio",
    "url": "https://www.youtube.com/results?search_query=Joel%20Adams%20-%20Please%20Don%20t%20Go%20official%20audio"
  },
  {
    "title": "FOREVER by JONEZEN Hip Hop Rock",
    "query": "FOREVER by JONEZEN Hip Hop Rock official audio",
    "url": "https://www.youtube.com/results?search_query=FOREVER%20by%20JONEZEN%20Hip%20Hop%20Rock%20official%20audio"
  },
  {
    "title": "Eminem_feat_Sia_-_Beautiful_Pain__with_lyrics",
    "query": "Eminem_feat_Sia_-_Beautiful_Pain__with_lyrics official audio",
    "url": "https://www.youtube.com/results?search_query=Eminem_feat_Sia_-_Beautiful_Pain__with_lyrics%20official%20audio"
  },
  {
    "title": "Eminem__-_Deep_End_",
    "query": "Eminem__-_Deep_End_ official audio",
    "url": "https://www.youtube.com/results?search_query=Eminem__-_Deep_End_%20official%20audio"
  },
  {
    "title": "Eminem - Higher",
    "query": "Eminem - Higher official audio",
    "url": "https://www.youtube.com/results?search_query=Eminem%20-%20Higher%20official%20audio"
  },
  {
    "title": "Billie Eilish - lovely ft. Khalid",
    "query": "Billie Eilish - lovely ft. Khalid official audio",
    "url": "https://www.youtube.com/results?search_query=Billie%20Eilish%20-%20lovely%20ft.%20Khalid%20official%20audio"
  },
  {
    "title": "Eminem - Leave A Light On",
    "query": "Eminem - Leave A Light On official audio",
    "url": "https://www.youtube.com/results?search_query=Eminem%20-%20Leave%20A%20Light%20On%20official%20audio"
  },
  {
    "title": "Eminem ft. Rihanna - The Monster 🎵",
    "query": "Eminem ft. Rihanna - The Monster 🎵 official audio",
    "url": "https://www.youtube.com/results?search_query=Eminem%20ft.%20Rihanna%20-%20The%20Monster%20%F0%9F%8E%B5%20official%20audio"
  },
  {
    "title": "Macklemore & Ryan Lewis - Can t Hold Us ft. Ray Dalton",
    "query": "Macklemore & Ryan Lewis - Can t Hold Us ft. Ray Dalton official audio",
    "url": "https://www.youtube.com/results?search_query=Macklemore%20%26%20Ryan%20Lewis%20-%20Can%20t%20Hold%20Us%20ft.%20Ray%20Dalton%20official%20audio"
  },
  {
    "title": "Hot_Action_Cop_-_Fever_For_The_Flava_Clean_Version_",
    "query": "Hot_Action_Cop_-_Fever_For_The_Flava_Clean_Version_ official audio",
    "url": "https://www.youtube.com/results?search_query=Hot_Action_Cop_-_Fever_For_The_Flava_Clean_Version_%20official%20audio"
  },
  {
    "title": "Eminem - Lose Yourself",
    "query": "Eminem - Lose Yourself official audio",
    "url": "https://www.youtube.com/results?search_query=Eminem%20-%20Lose%20Yourself%20official%20audio"
  },
  {
    "title": "Chris_Brown_ft_Busta_Rhymes_Lil_Wayne_-_Look_At_Me_Now_Qoret.com",
    "query": "Chris_Brown_ft_Busta_Rhymes_Lil_Wayne_-_Look_At_Me_Now_Qoret.com official audio",
    "url": "https://www.youtube.com/results?search_query=Chris_Brown_ft_Busta_Rhymes_Lil_Wayne_-_Look_At_Me_Now_Qoret.com%20official%20audio"
  },
  {
    "title": "Bad Meets Evil ft Bruno Mars Lighters",
    "query": "Bad Meets Evil ft Bruno Mars Lighters official audio",
    "url": "https://www.youtube.com/results?search_query=Bad%20Meets%20Evil%20ft%20Bruno%20Mars%20Lighters%20official%20audio"
  },
  {
    "title": "Bad_Meets_Evil_-_Take_From_Me_",
    "query": "Bad_Meets_Evil_-_Take_From_Me_ official audio",
    "url": "https://www.youtube.com/results?search_query=Bad_Meets_Evil_-_Take_From_Me_%20official%20audio"
  },
  {
    "title": "Bad Meets Evil - Above the law",
    "query": "Bad Meets Evil - Above the law official audio",
    "url": "https://www.youtube.com/results?search_query=Bad%20Meets%20Evil%20-%20Above%20the%20law%20official%20audio"
  },
  {
    "title": "Machine Gun Kelly, X Ambassadors & Bebe Rexha - Home",
    "query": "Machine Gun Kelly, X Ambassadors & Bebe Rexha - Home official audio",
    "url": "https://www.youtube.com/results?search_query=Machine%20Gun%20Kelly%2C%20X%20Ambassadors%20%26%20Bebe%20Rexha%20-%20Home%20official%20audio"
  },
  {
    "title": "AUD-20200105-WA0077",
    "query": "AUD-20200105-WA0077 official audio",
    "url": "https://www.youtube.com/results?search_query=AUD-20200105-WA0077%20official%20audio"
  },
  {
    "title": "Eminem_-_Godzilla_ft._Juice_WRLD",
    "query": "Eminem_-_Godzilla_ft._Juice_WRLD official audio",
    "url": "https://www.youtube.com/results?search_query=Eminem_-_Godzilla_ft._Juice_WRLD%20official%20audio"
  },
  {
    "title": "Cent - In Da Club",
    "query": "Cent - In Da Club official audio",
    "url": "https://www.youtube.com/results?search_query=Cent%20-%20In%20Da%20Club%20official%20audio"
  },
  {
    "title": "K.A.A.N - Work",
    "query": "K.A.A.N - Work official audio",
    "url": "https://www.youtube.com/results?search_query=K.A.A.N%20-%20Work%20official%20audio"
  },
  {
    "title": "Ed Sheeran - Galway Girl",
    "query": "Ed Sheeran - Galway Girl official audio",
    "url": "https://www.youtube.com/results?search_query=Ed%20Sheeran%20-%20Galway%20Girl%20official%20audio"
  },
  {
    "title": "Clean Bandit x Zara Larsson - Symphony (Steve Reec",
    "query": "Clean Bandit x Zara Larsson - Symphony (Steve Reec official audio",
    "url": "https://www.youtube.com/results?search_query=Clean%20Bandit%20x%20Zara%20Larsson%20-%20Symphony%20%28Steve%20Reec%20official%20audio"
  },
  {
    "title": "Charlie Puth - _How Long_",
    "query": "Charlie Puth - _How Long_ official audio",
    "url": "https://www.youtube.com/results?search_query=Charlie%20Puth%20-%20_How%20Long_%20official%20audio"
  },
  {
    "title": "Charlie Puth - Attention",
    "query": "Charlie Puth - Attention official audio",
    "url": "https://www.youtube.com/results?search_query=Charlie%20Puth%20-%20Attention%20official%20audio"
  },
  {
    "title": "Cartoon - On & On NCS Release",
    "query": "Cartoon - On & On NCS Release official audio",
    "url": "https://www.youtube.com/results?search_query=Cartoon%20-%20On%20%26%20On%20NCS%20Release%20official%20audio"
  },
  {
    "title": "Calvin Harris - This Is What You Came For",
    "query": "Calvin Harris - This Is What You Came For official audio",
    "url": "https://www.youtube.com/results?search_query=Calvin%20Harris%20-%20This%20Is%20What%20You%20Came%20For%20official%20audio"
  },
  {
    "title": "Calvin Harris - Blame ft. John Newman - 128K MP3",
    "query": "Calvin Harris - Blame ft. John Newman - 128K MP3 official audio",
    "url": "https://www.youtube.com/results?search_query=Calvin%20Harris%20-%20Blame%20ft.%20John%20Newman%20-%20128K%20MP3%20official%20audio"
  },
  {
    "title": "Bruno Mars - That_s What I Like - 128K MP3",
    "query": "Bruno Mars - That_s What I Like - 128K MP3 official audio",
    "url": "https://www.youtube.com/results?search_query=Bruno%20Mars%20-%20That_s%20What%20I%20Like%20-%20128K%20MP3%20official%20audio"
  },
  {
    "title": "BVRNOUT - Take It Easy NCS Release",
    "query": "BVRNOUT - Take It Easy NCS Release official audio",
    "url": "https://www.youtube.com/results?search_query=BVRNOUT%20-%20Take%20It%20Easy%20NCS%20Release%20official%20audio"
  },
  {
    "title": "Bruno Mars - 24K Magic - 128K MP3",
    "query": "Bruno Mars - 24K Magic - 128K MP3 official audio",
    "url": "https://www.youtube.com/results?search_query=Bruno%20Mars%20-%2024K%20Magic%20-%20128K%20MP3%20official%20audio"
  },
  {
    "title": "Major Lazer - Christmas Trees",
    "query": "Major Lazer - Christmas Trees official audio",
    "url": "https://www.youtube.com/results?search_query=Major%20Lazer%20-%20Christmas%20Trees%20official%20audio"
  },
  {
    "title": "Jason Derulo feat. Snoop Dogg - Wiggle (Onderkoffe",
    "query": "Jason Derulo feat. Snoop Dogg - Wiggle (Onderkoffe official audio",
    "url": "https://www.youtube.com/results?search_query=Jason%20Derulo%20feat.%20Snoop%20Dogg%20-%20Wiggle%20%28Onderkoffe%20official%20audio"
  },
  {
    "title": "Eminem - Rap God",
    "query": "Eminem - Rap God official audio",
    "url": "https://www.youtube.com/results?search_query=Eminem%20-%20Rap%20God%20official%20audio"
  },
  {
    "title": "Orangestar_-_DAYBREAK_FRONTLINE__Official_Video",
    "query": "Orangestar_-_DAYBREAK_FRONTLINE__Official_Video official audio",
    "url": "https://www.youtube.com/results?search_query=Orangestar_-_DAYBREAK_FRONTLINE__Official_Video%20official%20audio"
  },
  {
    "title": "133205-samsung-whistle-27876",
    "query": "133205-samsung-whistle-27876 official audio",
    "url": "https://www.youtube.com/results?search_query=133205-samsung-whistle-27876%20official%20audio"
  },
  {
    "title": "Till_I_Collapse___Purple_Haze_-_Eminem___Jimi_Hendrix_Mashup",
    "query": "Till_I_Collapse___Purple_Haze_-_Eminem___Jimi_Hendrix_Mashup official audio",
    "url": "https://www.youtube.com/results?search_query=Till_I_Collapse___Purple_Haze_-_Eminem___Jimi_Hendrix_Mashup%20official%20audio"
  },
  {
    "title": "Eminem_-_Lose_Yourself⎪Fingerstyle_guitar",
    "query": "Eminem_-_Lose_Yourself⎪Fingerstyle_guitar official audio",
    "url": "https://www.youtube.com/results?search_query=Eminem_-_Lose_Yourself%E2%8E%AAFingerstyle_guitar%20official%20audio"
  },
  {
    "title": "EMINEM_ON_GUITAR__-_Luca_Stricagnoli_-_Fingerstyle_Guitar",
    "query": "EMINEM_ON_GUITAR__-_Luca_Stricagnoli_-_Fingerstyle_Guitar official audio",
    "url": "https://www.youtube.com/results?search_query=EMINEM_ON_GUITAR__-_Luca_Stricagnoli_-_Fingerstyle_Guitar%20official%20audio"
  },
  {
    "title": "Naruto_-_Sadness_and_Sorrow__-_Taylor_Davis",
    "query": "Naruto_-_Sadness_and_Sorrow__-_Taylor_Davis official audio",
    "url": "https://www.youtube.com/results?search_query=Naruto_-_Sadness_and_Sorrow__-_Taylor_Davis%20official%20audio"
  },
  {
    "title": "Bakugou_Sings_Renai_Circulation",
    "query": "Bakugou_Sings_Renai_Circulation official audio",
    "url": "https://www.youtube.com/results?search_query=Bakugou_Sings_Renai_Circulation%20official%20audio"
  },
  {
    "title": "Fairy_Tail_Theme__Taylor_Davis",
    "query": "Fairy_Tail_Theme__Taylor_Davis official audio",
    "url": "https://www.youtube.com/results?search_query=Fairy_Tail_Theme__Taylor_Davis%20official%20audio"
  },
  {
    "title": "Fairy_tail-Theme_song",
    "query": "Fairy_tail-Theme_song official audio",
    "url": "https://www.youtube.com/results?search_query=Fairy_tail-Theme_song%20official%20audio"
  },
  {
    "title": "Beethoven_-_Für_Elise_",
    "query": "Beethoven_-_Für_Elise_ official audio",
    "url": "https://www.youtube.com/results?search_query=Beethoven_-_F%C3%BCr_Elise_%20official%20audio"
  },
  {
    "title": "Dragon_Ball_Super_Opening_2_Full『Kiyoshi_Hikawa_-_Genkai_Toppa_×_Survivor』",
    "query": "Dragon_Ball_Super_Opening_2_Full『Kiyoshi_Hikawa_-_Genkai_Toppa_×_Survivor』 official audio",
    "url": "https://www.youtube.com/results?search_query=Dragon_Ball_Super_Opening_2_Full%E3%80%8EKiyoshi_Hikawa_-_Genkai_Toppa_%C3%97_Survivor%E3%80%8F%20official%20audio"
  },
  {
    "title": "MAN_WITH_A_MISSION_-_Take_Me_Under_",
    "query": "MAN_WITH_A_MISSION_-_Take_Me_Under_ official audio",
    "url": "https://www.youtube.com/results?search_query=MAN_WITH_A_MISSION_-_Take_Me_Under_%20official%20audio"
  },
  {
    "title": "MAN_WITH_A_MISSION_-_My_Hero",
    "query": "MAN_WITH_A_MISSION_-_My_Hero official audio",
    "url": "https://www.youtube.com/results?search_query=MAN_WITH_A_MISSION_-_My_Hero%20official%20audio"
  },
  {
    "title": "ONE_OK_ROCK_-_We_are_",
    "query": "ONE_OK_ROCK_-_We_are_ official audio",
    "url": "https://www.youtube.com/results?search_query=ONE_OK_ROCK_-_We_are_%20official%20audio"
  },
  {
    "title": "AKLO___YOUR_LANE",
    "query": "AKLO___YOUR_LANE official audio",
    "url": "https://www.youtube.com/results?search_query=AKLO___YOUR_LANE%20official%20audio"
  },
  {
    "title": "milet「Until_I_Die」MUSIC_VIDEO_",
    "query": "milet「Until_I_Die」MUSIC_VIDEO_ official audio",
    "url": "https://www.youtube.com/results?search_query=milet%E3%80%8CUntil_I_Die%E3%80%8DMUSIC_VIDEO_%20official%20audio"
  },
  {
    "title": "milet「Drown」MUSIC_VIDEO（「ヴィンランド・サガ」エンディングテーマ)",
    "query": "milet「Drown」MUSIC_VIDEO（「ヴィンランド・サガ」エンディングテーマ) official audio",
    "url": "https://www.youtube.com/results?search_query=milet%E3%80%8CDrown%E3%80%8DMUSIC_VIDEO%EF%BC%88%E3%80%8C%E3%83%B4%E3%82%A3%E3%83%B3%E3%83%A9%E3%83%B3%E3%83%89%E3%83%BB%E3%82%B5%E3%82%AC%E3%80%8D%E3%82%A8%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%86%E3%83%BC%E3%83%9E%29%20official%20audio"
  },
  {
    "title": "milet - Grab_the_air - Produced_by_Kamikaze_Boy__MAN_WITH_A_MISSION____1st_album - eyes 6.3_on_sale",
    "query": "milet - Grab_the_air - Produced_by_Kamikaze_Boy__MAN_WITH_A_MISSION____1st_album - eyes 6.3_on_sale official audio",
    "url": "https://www.youtube.com/results?search_query=milet%20-%20Grab_the_air%20-%20Produced_by_Kamikaze_Boy__MAN_WITH_A_MISSION____1st_album%20-%20eyes%206.3_on_sale%20official%20audio"
  },
  {
    "title": "inside_you",
    "query": "inside_you official audio",
    "url": "https://www.youtube.com/results?search_query=inside_you%20official%20audio"
  },
  {
    "title": "Prezioso_&_Marvin_-_The_Riddle__",
    "query": "Prezioso_&_Marvin_-_The_Riddle__ official audio",
    "url": "https://www.youtube.com/results?search_query=Prezioso_%26_Marvin_-_The_Riddle__%20official%20audio"
  },
  {
    "title": "ONE_OK_ROCK_-_Clock_Strikes_",
    "query": "ONE_OK_ROCK_-_Clock_Strikes_ official audio",
    "url": "https://www.youtube.com/results?search_query=ONE_OK_ROCK_-_Clock_Strikes_%20official%20audio"
  },
  {
    "title": "Jumble__Biggest_Project",
    "query": "Jumble__Biggest_Project official audio",
    "url": "https://www.youtube.com/results?search_query=Jumble__Biggest_Project%20official%20audio"
  },
  {
    "title": "Gods_Eater_Burst_Ending",
    "query": "Gods_Eater_Burst_Ending official audio",
    "url": "https://www.youtube.com/results?search_query=Gods_Eater_Burst_Ending%20official%20audio"
  },
  {
    "title": "God_Eater_2_OST_-_In_a_Pool_of_Sunshine",
    "query": "God_Eater_2_OST_-_In_a_Pool_of_Sunshine official audio",
    "url": "https://www.youtube.com/results?search_query=God_Eater_2_OST_-_In_a_Pool_of_Sunshine%20official%20audio"
  },
  {
    "title": "GHOST_ORACLE_DRIVE_-_Maintain_Maintain_",
    "query": "GHOST_ORACLE_DRIVE_-_Maintain_Maintain_ official audio",
    "url": "https://www.youtube.com/results?search_query=GHOST_ORACLE_DRIVE_-_Maintain_Maintain_%20official%20audio"
  },
  {
    "title": "FLOW_-_Go!!!_",
    "query": "FLOW_-_Go!!!_ official audio",
    "url": "https://www.youtube.com/results?search_query=FLOW_-_Go%21%21%21_%20official%20audio"
  },
  {
    "title": "Aimer_-_Kataomoi",
    "query": "Aimer_-_Kataomoi official audio",
    "url": "https://www.youtube.com/results?search_query=Aimer_-_Kataomoi%20official%20audio"
  },
  {
    "title": "【ゴッドイーター】__alan_-_Over_the_Clouds___HD",
    "query": "【ゴッドイーター】__alan_-_Over_the_Clouds___HD official audio",
    "url": "https://www.youtube.com/results?search_query=%E3%80%90%E3%82%B4%E3%83%83%E3%83%89%E3%82%A4%E3%83%BC%E3%82%BF%E3%83%BC%E3%80%91__alan_-_Over_the_Clouds___HD%20official%20audio"
  },
  {
    "title": "crie",
    "query": "crie official audio",
    "url": "https://www.youtube.com/results?search_query=crie%20official%20audio"
  },
  {
    "title": "Tones_And_I_-_Dance_Monkey_",
    "query": "Tones_And_I_-_Dance_Monkey_ official audio",
    "url": "https://www.youtube.com/results?search_query=Tones_And_I_-_Dance_Monkey_%20official%20audio"
  },
  {
    "title": "MANS_NOT_HOT_LYRICS_-_BIG_SHAQ_",
    "query": "MANS_NOT_HOT_LYRICS_-_BIG_SHAQ_ official audio",
    "url": "https://www.youtube.com/results?search_query=MANS_NOT_HOT_LYRICS_-_BIG_SHAQ_%20official%20audio"
  },
  {
    "title": "Just_made_an_alarm_for_you",
    "query": "Just_made_an_alarm_for_you official audio",
    "url": "https://www.youtube.com/results?search_query=Just_made_an_alarm_for_you%20official%20audio"
  },
  {
    "title": "Hai Phut Hon x Notice me",
    "query": "Hai Phut Hon x Notice me official audio",
    "url": "https://www.youtube.com/results?search_query=Hai%20Phut%20Hon%20x%20Notice%20me%20official%20audio"
  },
  {
    "title": "Haywyre - Tell Me",
    "query": "Haywyre - Tell Me official audio",
    "url": "https://www.youtube.com/results?search_query=Haywyre%20-%20Tell%20Me%20official%20audio"
  },
  {
    "title": "Immortals - Fall Out Boy",
    "query": "Immortals - Fall Out Boy official audio",
    "url": "https://www.youtube.com/results?search_query=Immortals%20-%20Fall%20Out%20Boy%20official%20audio"
  },
  {
    "title": "Hot Wings - Rio Soundtrack w",
    "query": "Hot Wings - Rio Soundtrack w official audio",
    "url": "https://www.youtube.com/results?search_query=Hot%20Wings%20-%20Rio%20Soundtrack%20w%20official%20audio"
  },
  {
    "title": "INFINITY JAYMES YOUNG",
    "query": "INFINITY JAYMES YOUNG official audio",
    "url": "https://www.youtube.com/results?search_query=INFINITY%20JAYMES%20YOUNG%20official%20audio"
  },
  {
    "title": "iPhone Ringtone Trap",
    "query": "iPhone Ringtone Trap official audio",
    "url": "https://www.youtube.com/results?search_query=iPhone%20Ringtone%20Trap%20official%20audio"
  },
  {
    "title": "James Arthur - Impossible",
    "query": "James Arthur - Impossible official audio",
    "url": "https://www.youtube.com/results?search_query=James%20Arthur%20-%20Impossible%20official%20audio"
  },
  {
    "title": "Jay Eskar & Doxed - Let s Run Away",
    "query": "Jay Eskar & Doxed - Let s Run Away official audio",
    "url": "https://www.youtube.com/results?search_query=Jay%20Eskar%20%26%20Doxed%20-%20Let%20s%20Run%20Away%20official%20audio"
  },
  {
    "title": "James Arthur - September",
    "query": "James Arthur - September official audio",
    "url": "https://www.youtube.com/results?search_query=James%20Arthur%20-%20September%20official%20audio"
  },
  {
    "title": "Jonezen - Do It Myself",
    "query": "Jonezen - Do It Myself official audio",
    "url": "https://www.youtube.com/results?search_query=Jonezen%20-%20Do%20It%20Myself%20official%20audio"
  },
  {
    "title": "JONEZEN - THERE FOR YOU",
    "query": "JONEZEN - THERE FOR YOU official audio",
    "url": "https://www.youtube.com/results?search_query=JONEZEN%20-%20THERE%20FOR%20YOU%20official%20audio"
  },
  {
    "title": "jvla - Such A Whore",
    "query": "jvla - Such A Whore official audio",
    "url": "https://www.youtube.com/results?search_query=jvla%20-%20Such%20A%20Whore%20official%20audio"
  },
  {
    "title": "Jordan world. on sight LIFE AIN T FAIR",
    "query": "Jordan world. on sight LIFE AIN T FAIR official audio",
    "url": "https://www.youtube.com/results?search_query=Jordan%20world.%20on%20sight%20LIFE%20AIN%20T%20FAIR%20official%20audio"
  },
  {
    "title": "K.A.A.N - Feels",
    "query": "K.A.A.N - Feels official audio",
    "url": "https://www.youtube.com/results?search_query=K.A.A.N%20-%20Feels%20official%20audio"
  },
  {
    "title": "K.A.A.N - Lonely",
    "query": "K.A.A.N - Lonely official audio",
    "url": "https://www.youtube.com/results?search_query=K.A.A.N%20-%20Lonely%20official%20audio"
  },
  {
    "title": "K.A.A.N - Mary Jane",
    "query": "K.A.A.N - Mary Jane official audio",
    "url": "https://www.youtube.com/results?search_query=K.A.A.N%20-%20Mary%20Jane%20official%20audio"
  },
  {
    "title": "Kanye West - Stronger",
    "query": "Kanye West - Stronger official audio",
    "url": "https://www.youtube.com/results?search_query=Kanye%20West%20-%20Stronger%20official%20audio"
  },
  {
    "title": "Kina - Can We Kiss Forever ft. Adriana Proenza",
    "query": "Kina - Can We Kiss Forever ft. Adriana Proenza official audio",
    "url": "https://www.youtube.com/results?search_query=Kina%20-%20Can%20We%20Kiss%20Forever%20ft.%20Adriana%20Proenza%20official%20audio"
  },
  {
    "title": "Kina - Can We Kiss Forever - Instrumental Muhit Z Mix",
    "query": "Kina - Can We Kiss Forever - Instrumental Muhit Z Mix official audio",
    "url": "https://www.youtube.com/results?search_query=Kina%20-%20Can%20We%20Kiss%20Forever%20-%20Instrumental%20Muhit%20Z%20Mix%20official%20audio"
  },
  {
    "title": "Lacco Tower - Haruka 遥",
    "query": "Lacco Tower - Haruka 遥 official audio",
    "url": "https://www.youtube.com/results?search_query=Lacco%20Tower%20-%20Haruka%20%E9%81%A5%20official%20audio"
  },
  {
    "title": "Kina - get you the moon ft. Snow",
    "query": "Kina - get you the moon ft. Snow official audio",
    "url": "https://www.youtube.com/results?search_query=Kina%20-%20get%20you%20the%20moon%20ft.%20Snow%20official%20audio"
  },
  {
    "title": "Linkin Park - In The End",
    "query": "Linkin Park - In The End official audio",
    "url": "https://www.youtube.com/results?search_query=Linkin%20Park%20-%20In%20The%20End%20official%20audio"
  },
  {
    "title": "Linkin Park - Numb",
    "query": "Linkin Park - Numb official audio",
    "url": "https://www.youtube.com/results?search_query=Linkin%20Park%20-%20Numb%20official%20audio"
  },
  {
    "title": "Linkin Park Vs Will Smith - Party Starter",
    "query": "Linkin Park Vs Will Smith - Party Starter official audio",
    "url": "https://www.youtube.com/results?search_query=Linkin%20Park%20Vs%20Will%20Smith%20-%20Party%20Starter%20official%20audio"
  },
  {
    "title": "Linkin Park - Numb Encore ft. Jay Z",
    "query": "Linkin Park - Numb Encore ft. Jay Z official audio",
    "url": "https://www.youtube.com/results?search_query=Linkin%20Park%20-%20Numb%20Encore%20ft.%20Jay%20Z%20official%20audio"
  },
  {
    "title": "Lukas Graham - 7 Years",
    "query": "Lukas Graham - 7 Years official audio",
    "url": "https://www.youtube.com/results?search_query=Lukas%20Graham%20-%207%20Years%20official%20audio"
  },
  {
    "title": "Lukas Graham - Lie",
    "query": "Lukas Graham - Lie official audio",
    "url": "https://www.youtube.com/results?search_query=Lukas%20Graham%20-%20Lie%20official%20audio"
  },
  {
    "title": "Lukas Graham - Mama Said",
    "query": "Lukas Graham - Mama Said official audio",
    "url": "https://www.youtube.com/results?search_query=Lukas%20Graham%20-%20Mama%20Said%20official%20audio"
  },
  {
    "title": "Lukas Graham - You re Not There",
    "query": "Lukas Graham - You re Not There official audio",
    "url": "https://www.youtube.com/results?search_query=Lukas%20Graham%20-%20You%20re%20Not%20There%20official%20audio"
  },
  {
    "title": "MACKLEMORE & RYAN LEWIS - CAN'T HOLD US FEAT. RAY DALTON",
    "query": "MACKLEMORE & RYAN LEWIS - CAN'T HOLD US FEAT. RAY DALTON official audio",
    "url": "https://www.youtube.com/results?search_query=MACKLEMORE%20%26%20RYAN%20LEWIS%20-%20CAN%27T%20HOLD%20US%20FEAT.%20RAY%20DALTON%20official%20audio"
  },
  {
    "title": "Madcon - Beggin",
    "query": "Madcon - Beggin official audio",
    "url": "https://www.youtube.com/results?search_query=Madcon%20-%20Beggin%20official%20audio"
  },
  {
    "title": "Maher Zain - Assalamu Alayka ماهر زين - السلام عليك",
    "query": "Maher Zain - Assalamu Alayka ماهر زين - السلام عليك official audio",
    "url": "https://www.youtube.com/results?search_query=Maher%20Zain%20-%20Assalamu%20Alayka%20%D9%85%D8%A7%D9%87%D8%B1%20%D8%B2%D9%8A%D9%86%20-%20%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%20official%20audio"
  },
  {
    "title": "Marshmello ft. Bastille - Happier",
    "query": "Marshmello ft. Bastille - Happier official audio",
    "url": "https://www.youtube.com/results?search_query=Marshmello%20ft.%20Bastille%20-%20Happier%20official%20audio"
  },
  {
    "title": "Mario Judah - Die Very Rough",
    "query": "Mario Judah - Die Very Rough official audio",
    "url": "https://www.youtube.com/results?search_query=Mario%20Judah%20-%20Die%20Very%20Rough%20official%20audio"
  },
  {
    "title": "Middle of the Night - Elley Duhé┃Japanese Version ┃Prod. @Curse",
    "query": "Middle of the Night - Elley Duhé┃Japanese Version ┃Prod. @Curse official audio",
    "url": "https://www.youtube.com/results?search_query=Middle%20of%20the%20Night%20-%20Elley%20Duh%C3%A9%E2%94%83Japanese%20Version%20%E2%94%83Prod.%20%40Curse%20official%20audio"
  },
  {
    "title": "Miley Cyrus - When I Look At You 🎵",
    "query": "Miley Cyrus - When I Look At You 🎵 official audio",
    "url": "https://www.youtube.com/results?search_query=Miley%20Cyrus%20-%20When%20I%20Look%20At%20You%20%F0%9F%8E%B5%20official%20audio"
  },
  {
    "title": "MONSTA X - 「Shoot Out 」 Music",
    "query": "MONSTA X - 「Shoot Out 」 Music official audio",
    "url": "https://www.youtube.com/results?search_query=MONSTA%20X%20-%20%E3%80%8CShoot%20Out%20%E3%80%8D%20Music%20official%20audio"
  },
  {
    "title": "Mood-24kGoldn",
    "query": "Mood-24kGoldn official audio",
    "url": "https://www.youtube.com/results?search_query=Mood-24kGoldn%20official%20audio"
  },
  {
    "title": "MY FIRST STORY Black Rail Video_CBR_256k",
    "query": "MY FIRST STORY Black Rail Video_CBR_256k official audio",
    "url": "https://www.youtube.com/results?search_query=MY%20FIRST%20STORY%20Black%20Rail%20Video_CBR_256k%20official%20audio"
  },
  {
    "title": "NF - CLOUDS",
    "query": "NF - CLOUDS official audio",
    "url": "https://www.youtube.com/results?search_query=NF%20-%20CLOUDS%20official%20audio"
  },
  {
    "title": "NF - How Could You Leave Us",
    "query": "NF - How Could You Leave Us official audio",
    "url": "https://www.youtube.com/results?search_query=NF%20-%20How%20Could%20You%20Leave%20Us%20official%20audio"
  },
  {
    "title": "NF - Eminem_the_search_2021",
    "query": "NF - Eminem_the_search_2021 official audio",
    "url": "https://www.youtube.com/results?search_query=NF%20-%20Eminem_the_search_2021%20official%20audio"
  },
  {
    "title": "NF - Intro III",
    "query": "NF - Intro III official audio",
    "url": "https://www.youtube.com/results?search_query=NF%20-%20Intro%20III%20official%20audio"
  },
  {
    "title": "NF - If You Want Love",
    "query": "NF - If You Want Love official audio",
    "url": "https://www.youtube.com/results?search_query=NF%20-%20If%20You%20Want%20Love%20official%20audio"
  },
  {
    "title": "NF - Intro",
    "query": "NF - Intro official audio",
    "url": "https://www.youtube.com/results?search_query=NF%20-%20Intro%20official%20audio"
  },
  {
    "title": "NF - Know",
    "query": "NF - Know official audio",
    "url": "https://www.youtube.com/results?search_query=NF%20-%20Know%20official%20audio"
  },
  {
    "title": "NF - Leave Me Alone",
    "query": "NF - Leave Me Alone official audio",
    "url": "https://www.youtube.com/results?search_query=NF%20-%20Leave%20Me%20Alone%20official%20audio"
  },
  {
    "title": "NF - Only",
    "query": "NF - Only official audio",
    "url": "https://www.youtube.com/results?search_query=NF%20-%20Only%20official%20audio"
  },
  {
    "title": "NF - STORY",
    "query": "NF - STORY official audio",
    "url": "https://www.youtube.com/results?search_query=NF%20-%20STORY%20official%20audio"
  },
  {
    "title": "NF - Why Eminem feat",
    "query": "NF - Why Eminem feat official audio",
    "url": "https://www.youtube.com/results?search_query=NF%20-%20Why%20Eminem%20feat%20official%20audio"
  },
  {
    "title": "NF - You re Special",
    "query": "NF - You re Special official audio",
    "url": "https://www.youtube.com/results?search_query=NF%20-%20You%20re%20Special%20official%20audio"
  },
  {
    "title": "NF, Sasha Sloan - Only",
    "query": "NF, Sasha Sloan - Only official audio",
    "url": "https://www.youtube.com/results?search_query=NF%2C%20Sasha%20Sloan%20-%20Only%20official%20audio"
  },
  {
    "title": "Reach - Nobushi",
    "query": "Reach - Nobushi official audio",
    "url": "https://www.youtube.com/results?search_query=Reach%20-%20Nobushi%20official%20audio"
  },
  {
    "title": "Parody wiggle",
    "query": "Parody wiggle official audio",
    "url": "https://www.youtube.com/results?search_query=Parody%20wiggle%20official%20audio"
  },
  {
    "title": "Remember The Name - Fort Minor",
    "query": "Remember The Name - Fort Minor official audio",
    "url": "https://www.youtube.com/results?search_query=Remember%20The%20Name%20-%20Fort%20Minor%20official%20audio"
  },
  {
    "title": "Rio2-It's a Jungle Out Here",
    "query": "Rio2-It's a Jungle Out Here official audio",
    "url": "https://www.youtube.com/results?search_query=Rio2-It%27s%20a%20Jungle%20Out%20Here%20official%20audio"
  },
  {
    "title": "Ricky Bombay- 20 on the Sleeve",
    "query": "Ricky Bombay- 20 on the Sleeve official audio",
    "url": "https://www.youtube.com/results?search_query=Ricky%20Bombay-%2020%20on%20the%20Sleeve%20official%20audio"
  },
  {
    "title": "RISE volume upft The Glitch Mob Mako and The Word Alive Worlds 2018 League of Legends Ringtone",
    "query": "RISE volume upft The Glitch Mob Mako and The Word Alive Worlds 2018 League of Legends Ringtone official audio",
    "url": "https://www.youtube.com/results?search_query=RISE%20volume%20upft%20The%20Glitch%20Mob%20Mako%20and%20The%20Word%20Alive%20Worlds%202018%20League%20of%20Legends%20Ringtone%20official%20audio"
  },
  {
    "title": "Roman Holiday - Nicki Minaj",
    "query": "Roman Holiday - Nicki Minaj official audio",
    "url": "https://www.youtube.com/results?search_query=Roman%20Holiday%20-%20Nicki%20Minaj%20official%20audio"
  },
  {
    "title": "Roy Jones Jr. - Can t Be Touched",
    "query": "Roy Jones Jr. - Can t Be Touched official audio",
    "url": "https://www.youtube.com/results?search_query=Roy%20Jones%20Jr.%20-%20Can%20t%20Be%20Touched%20official%20audio"
  },
  {
    "title": "San Holo - We Rise",
    "query": "San Holo - We Rise official audio",
    "url": "https://www.youtube.com/results?search_query=San%20Holo%20-%20We%20Rise%20official%20audio"
  },
  {
    "title": "Sandro Cavazza, Georgia Ku - Love To Lose",
    "query": "Sandro Cavazza, Georgia Ku - Love To Lose official audio",
    "url": "https://www.youtube.com/results?search_query=Sandro%20Cavazza%2C%20Georgia%20Ku%20-%20Love%20To%20Lose%20official%20audio"
  },
  {
    "title": "Sandro Cavazza - Lean On Me",
    "query": "Sandro Cavazza - Lean On Me official audio",
    "url": "https://www.youtube.com/results?search_query=Sandro%20Cavazza%20-%20Lean%20On%20Me%20official%20audio"
  },
  {
    "title": "Sia - The Greatest",
    "query": "Sia - The Greatest official audio",
    "url": "https://www.youtube.com/results?search_query=Sia%20-%20The%20Greatest%20official%20audio"
  },
  {
    "title": "Satisfya - Emma Heesters Imran Khan",
    "query": "Satisfya - Emma Heesters Imran Khan official audio",
    "url": "https://www.youtube.com/results?search_query=Satisfya%20-%20Emma%20Heesters%20Imran%20Khan%20official%20audio"
  },
  {
    "title": "Sickick - Infected",
    "query": "Sickick - Infected official audio",
    "url": "https://www.youtube.com/results?search_query=Sickick%20-%20Infected%20official%20audio"
  },
  {
    "title": "SixTONES - NAVIGATOR",
    "query": "SixTONES - NAVIGATOR official audio",
    "url": "https://www.youtube.com/results?search_query=SixTONES%20-%20NAVIGATOR%20official%20audio"
  },
  {
    "title": "Stephen - Crossfire Pt. III ft. Saba, Ravyn Lenae, The O My s & J.P. Floyd",
    "query": "Stephen - Crossfire Pt. III ft. Saba, Ravyn Lenae, The O My s & J.P. Floyd official audio",
    "url": "https://www.youtube.com/results?search_query=Stephen%20-%20Crossfire%20Pt.%20III%20ft.%20Saba%2C%20Ravyn%20Lenae%2C%20The%20O%20My%20s%20%26%20J.P.%20Floyd%20official%20audio"
  },
  {
    "title": "Stephen - Crossfire",
    "query": "Stephen - Crossfire official audio",
    "url": "https://www.youtube.com/results?search_query=Stephen%20-%20Crossfire%20official%20audio"
  },
  {
    "title": "PHOENIX",
    "query": "PHOENIX official audio",
    "url": "https://www.youtube.com/results?search_query=PHOENIX%20official%20audio"
  },
  {
    "title": "Stereo_Hearts_Lyrics",
    "query": "Stereo_Hearts_Lyrics official audio",
    "url": "https://www.youtube.com/results?search_query=Stereo_Hearts_Lyrics%20official%20audio"
  },
  {
    "title": "Steve Aoki & Alan Walker - Are You Lonely feat. ISÁK",
    "query": "Steve Aoki & Alan Walker - Are You Lonely feat. ISÁK official audio",
    "url": "https://www.youtube.com/results?search_query=Steve%20Aoki%20%26%20Alan%20Walker%20-%20Are%20You%20Lonely%20feat.%20ISA%CC%81K%20official%20audio"
  },
  {
    "title": "Steve Aoki & Alan Walker - Are You Lonely feat. ISAK",
    "query": "Steve Aoki & Alan Walker - Are You Lonely feat. ISAK official audio",
    "url": "https://www.youtube.com/results?search_query=Steve%20Aoki%20%26%20Alan%20Walker%20-%20Are%20You%20Lonely%20feat.%20ISAK%20official%20audio"
  },
  {
    "title": "Suki Dakara. - Yuika 【English & Romaji 】",
    "query": "Suki Dakara. - Yuika 【English & Romaji 】 official audio",
    "url": "https://www.youtube.com/results?search_query=Suki%20Dakara.%20-%20Yuika%20%E3%80%90English%20%26%20Romaji%20%E3%80%91%20official%20audio"
  },
  {
    "title": "Sunnery James & Ryan Marciano x Bruno Martini feat. Mayra Shameless",
    "query": "Sunnery James & Ryan Marciano x Bruno Martini feat. Mayra Shameless official audio",
    "url": "https://www.youtube.com/results?search_query=Sunnery%20James%20%26%20Ryan%20Marciano%20x%20Bruno%20Martini%20feat.%20Mayra%20Shameless%20official%20audio"
  },
  {
    "title": "Swiggity",
    "query": "Swiggity official audio",
    "url": "https://www.youtube.com/results?search_query=Swiggity%20official%20audio"
  },
  {
    "title": "System Of A Down - Chop Suey_",
    "query": "System Of A Down - Chop Suey_ official audio",
    "url": "https://www.youtube.com/results?search_query=System%20Of%20A%20Down%20-%20Chop%20Suey_%20official%20audio"
  },
  {
    "title": "SXMPRA - COWBELL WARRIOR",
    "query": "SXMPRA - COWBELL WARRIOR official audio",
    "url": "https://www.youtube.com/results?search_query=SXMPRA%20-%20COWBELL%20WARRIOR%20official%20audio"
  },
  {
    "title": "Taio Cruz - Telling The World Rio OST Soundtrack",
    "query": "Taio Cruz - Telling The World Rio OST Soundtrack official audio",
    "url": "https://www.youtube.com/results?search_query=Taio%20Cruz%20-%20Telling%20The%20World%20Rio%20OST%20Soundtrack%20official%20audio"
  },
  {
    "title": "Tech N9ne - Worldwide Choppers",
    "query": "Tech N9ne - Worldwide Choppers official audio",
    "url": "https://www.youtube.com/results?search_query=Tech%20N9ne%20-%20Worldwide%20Choppers%20official%20audio"
  },
  {
    "title": "TAK - Enjoy with Us!",
    "query": "TAK - Enjoy with Us! official audio",
    "url": "https://www.youtube.com/results?search_query=TAK%20-%20Enjoy%20with%20Us%21%20official%20audio"
  },
  {
    "title": "Tech N9ne, 2Pac & Eminem - Demon",
    "query": "Tech N9ne, 2Pac & Eminem - Demon official audio",
    "url": "https://www.youtube.com/results?search_query=Tech%20N9ne%2C%202Pac%20%26%20Eminem%20-%20Demon%20official%20audio"
  },
  {
    "title": "The Chainsmokers - Closer ft. Halsey",
    "query": "The Chainsmokers - Closer ft. Halsey official audio",
    "url": "https://www.youtube.com/results?search_query=The%20Chainsmokers%20-%20Closer%20ft.%20Halsey%20official%20audio"
  },
  {
    "title": "The Chainsmokers - Closer ft. Halsey (No Riddim Re",
    "query": "The Chainsmokers - Closer ft. Halsey (No Riddim Re official audio",
    "url": "https://www.youtube.com/results?search_query=The%20Chainsmokers%20-%20Closer%20ft.%20Halsey%20%28No%20Riddim%20Re%20official%20audio"
  },
  {
    "title": "THE BANJO BEAT - RICKY DESKTOP",
    "query": "THE BANJO BEAT - RICKY DESKTOP official audio",
    "url": "https://www.youtube.com/results?search_query=THE%20BANJO%20BEAT%20-%20RICKY%20DESKTOP%20official%20audio"
  },
  {
    "title": "The Chainsmokers ft. Daya - Don_t Let Me Down (W_W",
    "query": "The Chainsmokers ft. Daya - Don_t Let Me Down (W_W official audio",
    "url": "https://www.youtube.com/results?search_query=The%20Chainsmokers%20ft.%20Daya%20-%20Don_t%20Let%20Me%20Down%20%28W_W%20official%20audio"
  },
  {
    "title": "The Pink Panther Theme Song",
    "query": "The Pink Panther Theme Song official audio",
    "url": "https://www.youtube.com/results?search_query=The%20Pink%20Panther%20Theme%20Song%20official%20audio"
  },
  {
    "title": "The Chainsmokers Ft. XYLØ - Setting Fires (it_s di",
    "query": "The Chainsmokers Ft. XYLØ - Setting Fires (it_s di official audio",
    "url": "https://www.youtube.com/results?search_query=The%20Chainsmokers%20Ft.%20XYL%C3%98%20-%20Setting%20Fires%20%28it_s%20di%20official%20audio"
  },
  {
    "title": "The Script - Hall of Fame ft. will.i.am",
    "query": "The Script - Hall of Fame ft. will.i.am official audio",
    "url": "https://www.youtube.com/results?search_query=The%20Script%20-%20Hall%20of%20Fame%20ft.%20will.i.am%20official%20audio"
  },
  {
    "title": "The Vamps - Somebody To You ft. Demi Lovato",
    "query": "The Vamps - Somebody To You ft. Demi Lovato official audio",
    "url": "https://www.youtube.com/results?search_query=The%20Vamps%20-%20Somebody%20To%20You%20ft.%20Demi%20Lovato%20official%20audio"
  },
  {
    "title": "The_Chemical_Brothers_-_Galvanize_",
    "query": "The_Chemical_Brothers_-_Galvanize_ official audio",
    "url": "https://www.youtube.com/results?search_query=The_Chemical_Brothers_-_Galvanize_%20official%20audio"
  },
  {
    "title": "The_Collectors_-_Aku_no_Tenshi_to_Seigi_no_Akuma_Dragon_Ball_Super_ED_7_",
    "query": "The_Collectors_-_Aku_no_Tenshi_to_Seigi_no_Akuma_Dragon_Ball_Super_ED_7_ official audio",
    "url": "https://www.youtube.com/results?search_query=The_Collectors_-_Aku_no_Tenshi_to_Seigi_no_Akuma_Dragon_Ball_Super_ED_7_%20official%20audio"
  },
  {
    "title": "This Song Will Give You Goosebumps HERO Fearless Motivation",
    "query": "This Song Will Give You Goosebumps HERO Fearless Motivation official audio",
    "url": "https://www.youtube.com/results?search_query=This%20Song%20Will%20Give%20You%20Goosebumps%20HERO%20Fearless%20Motivation%20official%20audio"
  },
  {
    "title": "This Song Will Inspire You To Let Go",
    "query": "This Song Will Inspire You To Let Go official audio",
    "url": "https://www.youtube.com/results?search_query=This%20Song%20Will%20Inspire%20You%20To%20Let%20Go%20official%20audio"
  },
  {
    "title": "Tick Tick Boom - Sage The Gemini ft. BygTwo3",
    "query": "Tick Tick Boom - Sage The Gemini ft. BygTwo3 official audio",
    "url": "https://www.youtube.com/results?search_query=Tick%20Tick%20Boom%20-%20Sage%20The%20Gemini%20ft.%20BygTwo3%20official%20audio"
  },
  {
    "title": "The Seige - Arise",
    "query": "The Seige - Arise official audio",
    "url": "https://www.youtube.com/results?search_query=The%20Seige%20-%20Arise%20official%20audio"
  },
  {
    "title": "Tom Macdonald - Cloned Rappers",
    "query": "Tom Macdonald - Cloned Rappers official audio",
    "url": "https://www.youtube.com/results?search_query=Tom%20Macdonald%20-%20Cloned%20Rappers%20official%20audio"
  },
  {
    "title": "Tired Kiss Forever Fading",
    "query": "Tired Kiss Forever Fading official audio",
    "url": "https://www.youtube.com/results?search_query=Tired%20Kiss%20Forever%20Fading%20official%20audio"
  },
  {
    "title": "Unknown Brain - Superhero",
    "query": "Unknown Brain - Superhero official audio",
    "url": "https://www.youtube.com/results?search_query=Unknown%20Brain%20-%20Superhero%20official%20audio"
  },
  {
    "title": "Tom MacDonald - The System New Song",
    "query": "Tom MacDonald - The System New Song official audio",
    "url": "https://www.youtube.com/results?search_query=Tom%20MacDonald%20-%20The%20System%20New%20Song%20official%20audio"
  },
  {
    "title": "What you know about rolling down in the deep",
    "query": "What you know about rolling down in the deep official audio",
    "url": "https://www.youtube.com/results?search_query=What%20you%20know%20about%20rolling%20down%20in%20the%20deep%20official%20audio"
  },
  {
    "title": "Vinland Saga - MUKANJYO ENGLISH Ver AmaLee",
    "query": "Vinland Saga - MUKANJYO ENGLISH Ver AmaLee official audio",
    "url": "https://www.youtube.com/results?search_query=Vinland%20Saga%20-%20MUKANJYO%20ENGLISH%20Ver%20AmaLee%20official%20audio"
  },
  {
    "title": "windows 11",
    "query": "windows 11 official audio",
    "url": "https://www.youtube.com/results?search_query=windows%2011%20official%20audio"
  },
  {
    "title": "Wrong Roads-Jonezen",
    "query": "Wrong Roads-Jonezen official audio",
    "url": "https://www.youtube.com/results?search_query=Wrong%20Roads-Jonezen%20official%20audio"
  },
  {
    "title": "Whoop Whoop That s The Sound Of The Police",
    "query": "Whoop Whoop That s The Sound Of The Police official audio",
    "url": "https://www.youtube.com/results?search_query=Whoop%20Whoop%20That%20s%20The%20Sound%20Of%20The%20Police%20official%20audio"
  },
  {
    "title": "White Gangster - OMG",
    "query": "White Gangster - OMG official audio",
    "url": "https://www.youtube.com/results?search_query=White%20Gangster%20-%20OMG%20official%20audio"
  },
  {
    "title": "Yusuf Alev - Yoros",
    "query": "Yusuf Alev - Yoros official audio",
    "url": "https://www.youtube.com/results?search_query=Yusuf%20Alev%20-%20Yoros%20official%20audio"
  },
  {
    "title": "YOUR NEW MORNING ALARM",
    "query": "YOUR NEW MORNING ALARM official audio",
    "url": "https://www.youtube.com/results?search_query=YOUR%20NEW%20MORNING%20ALARM%20official%20audio"
  },
  {
    "title": "XADE",
    "query": "XADE official audio",
    "url": "https://www.youtube.com/results?search_query=XADE%20official%20audio"
  },
  {
    "title": "阿肆 - 热爱105°C的你「Super Idol的笑容都没你的甜」【动态歌词】",
    "query": "阿肆 - 热爱105°C的你「Super Idol的笑容都没你的甜」【动态歌词】 official audio",
    "url": "https://www.youtube.com/results?search_query=%E9%98%BF%E8%82%86%20-%20%E7%83%AD%E7%88%B1105%C2%B0C%E7%9A%84%E4%BD%A0%E3%80%8CSuper%20Idol%E7%9A%84%E7%AC%91%E5%AE%B9%E9%83%BD%E6%B2%A1%E4%BD%A0%E7%9A%84%E7%94%9C%E3%80%8D%E3%80%90%E5%8A%A8%E6%80%81%E6%AD%8C%E8%AF%8D%E3%80%91%20official%20audio"
  },
  {
    "title": "米津玄師 「パプリカ」Kenshi Yonezu Paprika",
    "query": "米津玄師 「パプリカ」Kenshi Yonezu Paprika official audio",
    "url": "https://www.youtube.com/results?search_query=%E7%B1%B3%E6%B4%A5%E7%8E%84%E5%B8%AB%20%E3%80%8C%E3%83%91%E3%83%97%E3%83%AA%E3%82%AB%E3%80%8DKenshi%20Yonezu%20Paprika%20official%20audio"
  },
  {
    "title": "秋山黄色『Caffeine』",
    "query": "秋山黄色『Caffeine』 official audio",
    "url": "https://www.youtube.com/results?search_query=%E7%A7%8B%E5%B1%B1%E9%BB%84%E8%89%B2%E3%80%8ECaffeine%E3%80%8F%20official%20audio"
  },
  {
    "title": "周杰倫 Jay Chou 【Now You See Me】",
    "query": "周杰倫 Jay Chou 【Now You See Me】 official audio",
    "url": "https://www.youtube.com/results?search_query=%E5%91%A8%E6%9D%B0%E5%80%AB%20Jay%20Chou%20%E3%80%90Now%20You%20See%20Me%E3%80%91%20official%20audio"
  },
  {
    "title": "人生に疲れたあなたへ",
    "query": "人生に疲れたあなたへ official audio",
    "url": "https://www.youtube.com/results?search_query=%E4%BA%BA%E7%94%9F%E3%81%AB%E7%96%B2%E3%82%8C%E3%81%9F%E3%81%82%E3%81%AA%E3%81%9F%E3%81%B8%20official%20audio"
  },
  {
    "title": "主題歌 OST すずめ「Suzume」《すずめの戸締まり Suzume no Tojimari》",
    "query": "主題歌 OST すずめ「Suzume」《すずめの戸締まり Suzume no Tojimari》 official audio",
    "url": "https://www.youtube.com/results?search_query=%E4%B8%BB%E9%A1%8C%E6%AD%8C%20OST%20%E3%81%99%E3%81%9A%E3%82%81%E3%80%8CSuzume%E3%80%8D%E3%80%8A%E3%81%99%E3%81%9A%E3%82%81%E3%81%AE%E6%88%B8%E7%B7%A0%E3%81%BE%E3%82%8A%20Suzume%20no%20Tojimari%E3%80%8B%20official%20audio"
  },
  {
    "title": "スパークル -Your name. Music edition- 予告編 from new album「人間開花」初回盤DVD",
    "query": "スパークル -Your name. Music edition- 予告編 from new album「人間開花」初回盤DVD official audio",
    "url": "https://www.youtube.com/results?search_query=%E3%82%B9%E3%83%91%E3%83%BC%E3%82%AF%E3%83%AB%20-Your%20name.%20Music%20edition-%20%E4%BA%88%E5%91%8A%E7%B7%A8%20from%20new%20album%E3%80%8C%E4%BA%BA%E9%96%93%E9%96%8B%E8%8A%B1%E3%80%8D%E5%88%9D%E5%9B%9E%E7%9B%A4DVD%20official%20audio"
  },
  {
    "title": "Zius lit - Notice me",
    "query": "Zius lit - Notice me official audio",
    "url": "https://www.youtube.com/results?search_query=Zius%20lit%20-%20Notice%20me%20official%20audio"
  },
  {
    "title": "Zedd, Maren Morris, BEAUZ - Make You Say",
    "query": "Zedd, Maren Morris, BEAUZ - Make You Say official audio",
    "url": "https://www.youtube.com/results?search_query=Zedd%2C%20Maren%20Morris%2C%20BEAUZ%20-%20Make%20You%20Say%20official%20audio"
  },
  {
    "title": "Zedd, Grey - Adrenaline",
    "query": "Zedd, Grey - Adrenaline official audio",
    "url": "https://www.youtube.com/results?search_query=Zedd%2C%20Grey%20-%20Adrenaline%20official%20audio"
  },
  {
    "title": "Zara Larsson - Lush Life",
    "query": "Zara Larsson - Lush Life official audio",
    "url": "https://www.youtube.com/results?search_query=Zara%20Larsson%20-%20Lush%20Life%20official%20audio"
  },
  {
    "title": "ZA ki - Me7na يعطيني محنة",
    "query": "ZA ki - Me7na يعطيني محنة official audio",
    "url": "https://www.youtube.com/results?search_query=ZA%20ki%20-%20Me7na%20%D9%8A%D8%B9%D8%B7%D9%8A%D9%86%D9%8A%20%D9%85%D8%AD%D9%86%D8%A9%20official%20audio"
  },
  {
    "title": "＂01＂ by QUEEN BEE",
    "query": "＂01＂ by QUEEN BEE official audio",
    "url": "https://www.youtube.com/results?search_query=%EF%BC%8201%EF%BC%82%20by%20QUEEN%20BEE%20official%20audio"
  },
  {
    "title": "『King Gnu - SPECIALZ』",
    "query": "『King Gnu - SPECIALZ』 official audio",
    "url": "https://www.youtube.com/results?search_query=%E3%80%8EKing%20Gnu%20-%20SPECIALZ%E3%80%8F%20official%20audio"
  },
  {
    "title": "Zom 100_ Bucket List of the Dead Opening Full 『Song of the Dead』 by KANA-BOON",
    "query": "Zom 100_ Bucket List of the Dead Opening Full 『Song of the Dead』 by KANA-BOON official audio",
    "url": "https://www.youtube.com/results?search_query=Zom%20100_%20Bucket%20List%20of%20the%20Dead%20Opening%20Full%20%E3%80%8ESong%20of%20the%20Dead%E3%80%8F%20by%20KANA-BOON%20official%20audio"
  },
  {
    "title": "SawanoHiroyuki Honoka Takahashi『LilaS",
    "query": "SawanoHiroyuki Honoka Takahashi『LilaS official audio",
    "url": "https://www.youtube.com/results?search_query=SawanoHiroyuki%20Honoka%20Takahashi%E3%80%8ELilaS%20official%20audio"
  },
  {
    "title": "RADWIMPS - すずめ feat.十明",
    "query": "RADWIMPS - すずめ feat.十明 official audio",
    "url": "https://www.youtube.com/results?search_query=RADWIMPS%20-%20%E3%81%99%E3%81%9A%E3%82%81%20feat.%E5%8D%81%E6%98%8E%20official%20audio"
  },
  {
    "title": "黙れ",
    "query": "黙れ official audio",
    "url": "https://www.youtube.com/results?search_query=%E9%BB%99%E3%82%8C%20official%20audio"
  },
  {
    "title": "腐りきった人生だ。",
    "query": "腐りきった人生だ。 official audio",
    "url": "https://www.youtube.com/results?search_query=%E8%85%90%E3%82%8A%E3%81%8D%E3%81%A3%E3%81%9F%E4%BA%BA%E7%94%9F%E3%81%A0%E3%80%82%20official%20audio"
  },
  {
    "title": "病んでる人を助ける曲",
    "query": "病んでる人を助ける曲 official audio",
    "url": "https://www.youtube.com/results?search_query=%E7%97%85%E3%82%93%E3%81%A7%E3%82%8B%E4%BA%BA%E3%82%92%E5%8A%A9%E3%81%91%E3%82%8B%E6%9B%B2%20official%20audio"
  },
  {
    "title": "死にたいあなたへ送る曲",
    "query": "死にたいあなたへ送る曲 official audio",
    "url": "https://www.youtube.com/results?search_query=%E6%AD%BB%E3%81%AB%E3%81%9F%E3%81%84%E3%81%82%E3%81%AA%E3%81%9F%E3%81%B8%E9%80%81%E3%82%8B%E6%9B%B2%20official%20audio"
  },
  {
    "title": "恋人の事が大嫌いな人の曲",
    "query": "恋人の事が大嫌いな人の曲 official audio",
    "url": "https://www.youtube.com/results?search_query=%E6%81%8B%E4%BA%BA%E3%81%AE%E4%BA%8B%E3%81%8C%E5%A4%A7%E5%AB%8C%E3%81%84%E3%81%AA%E4%BA%BA%E3%81%AE%E6%9B%B2%20official%20audio"
  },
  {
    "title": "恋人がスマホやゲームに集中してかまってくれない曲",
    "query": "恋人がスマホやゲームに集中してかまってくれない曲 official audio",
    "url": "https://www.youtube.com/results?search_query=%E6%81%8B%E4%BA%BA%E3%81%8C%E3%82%B9%E3%83%9E%E3%83%9B%E3%82%84%E3%82%B2%E3%83%BC%E3%83%A0%E3%81%AB%E9%9B%86%E4%B8%AD%E3%81%97%E3%81%A6%E3%81%8B%E3%81%BE%E3%81%A3%E3%81%A6%E3%81%8F%E3%82%8C%E3%81%AA%E3%81%84%E6%9B%B2%20official%20audio"
  },
  {
    "title": "彼氏欲しすぎ症候群",
    "query": "彼氏欲しすぎ症候群 official audio",
    "url": "https://www.youtube.com/results?search_query=%E5%BD%BC%E6%B0%8F%E6%AC%B2%E3%81%97%E3%81%99%E3%81%8E%E7%97%87%E5%80%99%E7%BE%A4%20official%20audio"
  },
  {
    "title": "今は病んでも良いんだよ",
    "query": "今は病んでも良いんだよ official audio",
    "url": "https://www.youtube.com/results?search_query=%E4%BB%8A%E3%81%AF%E7%97%85%E3%82%93%E3%81%A7%E3%82%82%E8%89%AF%E3%81%84%E3%82%93%E3%81%A0%E3%82%88%20official%20audio"
  },
  {
    "title": "とりあえず動けって曲。",
    "query": "とりあえず動けって曲。 official audio",
    "url": "https://www.youtube.com/results?search_query=%E3%81%A8%E3%82%8A%E3%81%82%E3%81%88%E3%81%9A%E5%8B%95%E3%81%91%E3%81%A3%E3%81%A6%E6%9B%B2%E3%80%82%20official%20audio"
  },
  {
    "title": "True Intention - Takayan romaji",
    "query": "True Intention - Takayan romaji official audio",
    "url": "https://www.youtube.com/results?search_query=True%20Intention%20-%20Takayan%20romaji%20official%20audio"
  },
  {
    "title": "Shape of youでラップしました。",
    "query": "Shape of youでラップしました。 official audio",
    "url": "https://www.youtube.com/results?search_query=Shape%20of%20you%E3%81%A7%E3%83%A9%E3%83%83%E3%83%97%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%20official%20audio"
  },
  {
    "title": "KEN THE 390Turn Up feat, T-PABLOW,SKY-HI",
    "query": "KEN THE 390Turn Up feat, T-PABLOW,SKY-HI official audio",
    "url": "https://www.youtube.com/results?search_query=KEN%20THE%20390Turn%20Up%20feat%2C%20T-PABLOW%2CSKY-HI%20official%20audio"
  },
  {
    "title": "KEN THE 390 - Think Of You feat. Full Of Harmony",
    "query": "KEN THE 390 - Think Of You feat. Full Of Harmony official audio",
    "url": "https://www.youtube.com/results?search_query=KEN%20THE%20390%20-%20Think%20Of%20You%20feat.%20Full%20Of%20Harmony%20official%20audio"
  },
  {
    "title": "KEN THE 390 - Clap -From Album WEEKEND",
    "query": "KEN THE 390 - Clap -From Album WEEKEND official audio",
    "url": "https://www.youtube.com/results?search_query=KEN%20THE%20390%20-%20Clap%20-From%20Album%20WEEKEND%20official%20audio"
  },
  {
    "title": "Get lost! Face-judgers - Takayan",
    "query": "Get lost! Face-judgers - Takayan official audio",
    "url": "https://www.youtube.com/results?search_query=Get%20lost%21%20Face-judgers%20-%20Takayan%20official%20audio"
  },
  {
    "title": "NF - PAID MY DUES Ringtone",
    "query": "NF - PAID MY DUES Ringtone official audio",
    "url": "https://www.youtube.com/results?search_query=NF%20-%20PAID%20MY%20DUES%20Ringtone%20official%20audio"
  },
  {
    "title": "Jujutsu Kaisen 'Shibuya Incident Arc' - Ending FULL ＂more than words＂ by Hitsujibungaku",
    "query": "Jujutsu Kaisen 'Shibuya Incident Arc' - Ending FULL ＂more than words＂ by Hitsujibungaku official audio",
    "url": "https://www.youtube.com/results?search_query=Jujutsu%20Kaisen%20%27Shibuya%20Incident%20Arc%27%20-%20Ending%20FULL%20%EF%BC%82more%20than%20words%EF%BC%82%20by%20Hitsujibungaku%20official%20audio"
  },
  {
    "title": "Dax- Still D.R.E",
    "query": "Dax- Still D.R.E official audio",
    "url": "https://www.youtube.com/results?search_query=Dax-%20Still%20D.R.E%20official%20audio"
  },
  {
    "title": "yung kai - blue",
    "query": "yung kai - blue official audio",
    "url": "https://www.youtube.com/results?search_query=yung%20kai%20-%20blue%20official%20audio"
  },
  {
    "title": "Zedd - Out Of Time",
    "query": "Zedd - Out Of Time official audio",
    "url": "https://www.youtube.com/results?search_query=Zedd%20-%20Out%20Of%20Time%20official%20audio"
  },
  {
    "title": "AM",
    "query": "AM official audio",
    "url": "https://www.youtube.com/results?search_query=AM%20official%20audio"
  },
  {
    "title": "النسخة الطويلة لنشيد تحيا الجيش الوطني الشعبي يلمروكي روح ت3طي",
    "query": "النسخة الطويلة لنشيد تحيا الجيش الوطني الشعبي يلمروكي روح ت3طي official audio",
    "url": "https://www.youtube.com/results?search_query=%D8%A7%D9%84%D9%86%D8%B3%D8%AE%D8%A9%20%D8%A7%D9%84%D8%B7%D9%88%D9%8A%D9%84%D8%A9%20%D9%84%D9%86%D8%B4%D9%8A%D8%AF%20%D8%AA%D8%AD%D9%8A%D8%A7%20%D8%A7%D9%84%D8%AC%D9%8A%D8%B4%20%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%20%D8%A7%D9%84%D8%B4%D8%B9%D8%A8%D9%8A%20%D9%8A%D9%84%D9%85%D8%B1%D9%88%D9%83%D9%8A%20%D8%B1%D9%88%D8%AD%20%D8%AA3%D8%B7%D9%8A%20official%20audio"
  },
  {
    "title": "Mr. Bill & Au5 - Chpinklez",
    "query": "Mr. Bill & Au5 - Chpinklez official audio",
    "url": "https://www.youtube.com/results?search_query=Mr.%20Bill%20%26%20Au5%20-%20Chpinklez%20official%20audio"
  },
  {
    "title": "Mr. Bill & Au5 - Shlappy",
    "query": "Mr. Bill & Au5 - Shlappy official audio",
    "url": "https://www.youtube.com/results?search_query=Mr.%20Bill%20%26%20Au5%20-%20Shlappy%20official%20audio"
  },
  {
    "title": "ჩუბინა",
    "query": "ჩუბინა official audio",
    "url": "https://www.youtube.com/results?search_query=%E1%83%A9%E1%83%A3%E1%83%91%E1%83%98%E1%83%9C%E1%83%90%20official%20audio"
  },
  {
    "title": "【スペシャルムービー】iri 「Faster than me」横浜流星主演ドラマ『 わかっていても the shapes of love 』主題歌-毎週月曜よる9時ABEMAで無料配信中",
    "query": "【スペシャルムービー】iri 「Faster than me」横浜流星主演ドラマ『 わかっていても the shapes of love 』主題歌-毎週月曜よる9時ABEMAで無料配信中 official audio",
    "url": "https://www.youtube.com/results?search_query=%E3%80%90%E3%82%B9%E3%83%9A%E3%82%B7%E3%83%A3%E3%83%AB%E3%83%A0%E3%83%BC%E3%83%93%E3%83%BC%E3%80%91iri%20%E3%80%8CFaster%20than%20me%E3%80%8D%E6%A8%AA%E6%B5%9C%E6%B5%81%E6%98%9F%E4%B8%BB%E6%BC%94%E3%83%89%E3%83%A9%E3%83%9E%E3%80%8E%20%E3%82%8F%E3%81%8B%E3%81%A3%E3%81%A6%E3%81%84%E3%81%A6%E3%82%82%20the%20shapes%20of%20love%20%E3%80%8F%E4%B8%BB%E9%A1%8C%E6%AD%8C-%E6%AF%8E%E9%80%B1%E6%9C%88%E6%9B%9C%E3%82%88%E3%82%8B9%E6%99%82ABEMA%E3%81%A7%E7%84%A1%E6%96%99%E9%85%8D%E4%BF%A1%E4%B8%AD%20official%20audio"
  },
  {
    "title": "Pause DOZA",
    "query": "Pause DOZA official audio",
    "url": "https://www.youtube.com/results?search_query=Pause%20DOZA%20official%20audio"
  },
  {
    "title": "God Eater OST - God and Man ~Vocal Version~",
    "query": "God Eater OST - God and Man ~Vocal Version~ official audio",
    "url": "https://www.youtube.com/results?search_query=God%20Eater%20OST%20-%20God%20and%20Man%20~Vocal%20Version~%20official%20audio"
  },
  {
    "title": "Dax - JOKER",
    "query": "Dax - JOKER official audio",
    "url": "https://www.youtube.com/results?search_query=Dax%20-%20JOKER%20official%20audio"
  },
  {
    "title": "Soap&Skin - Me And The Devil",
    "query": "Soap&Skin - Me And The Devil official audio",
    "url": "https://www.youtube.com/results?search_query=Soap%26Skin%20-%20Me%20And%20The%20Devil%20official%20audio"
  },
  {
    "title": "Shinedown -Diamond Eyes",
    "query": "Shinedown -Diamond Eyes official audio",
    "url": "https://www.youtube.com/results?search_query=Shinedown%20-Diamond%20Eyes%20official%20audio"
  },
  {
    "title": "I FEEL GOOD PRANK SOUND",
    "query": "I FEEL GOOD PRANK SOUND official audio",
    "url": "https://www.youtube.com/results?search_query=I%20FEEL%20GOOD%20PRANK%20SOUND%20official%20audio"
  },
  {
    "title": "Gravity - Jared Benjamin Song",
    "query": "Gravity - Jared Benjamin Song official audio",
    "url": "https://www.youtube.com/results?search_query=Gravity%20-%20Jared%20Benjamin%20Song%20official%20audio"
  },
  {
    "title": "Gravity Jared Benjamin",
    "query": "Gravity Jared Benjamin official audio",
    "url": "https://www.youtube.com/results?search_query=Gravity%20Jared%20Benjamin%20official%20audio"
  },
  {
    "title": "Zedd, Maren Morris, Grey - The Middle",
    "query": "Zedd, Maren Morris, Grey - The Middle official audio",
    "url": "https://www.youtube.com/results?search_query=Zedd%2C%20Maren%20Morris%2C%20Grey%20-%20The%20Middle%20official%20audio"
  },
  {
    "title": "Maddy Soma - OKE",
    "query": "Maddy Soma - OKE official audio",
    "url": "https://www.youtube.com/results?search_query=Maddy%20Soma%20-%20OKE%20official%20audio"
  },
  {
    "title": "Zedd - Transmission ft. Logic, X Ambassadors",
    "query": "Zedd - Transmission ft. Logic, X Ambassadors official audio",
    "url": "https://www.youtube.com/results?search_query=Zedd%20-%20Transmission%20ft.%20Logic%2C%20X%20Ambassadors%20official%20audio"
  },
  {
    "title": "Hangover Love",
    "query": "Hangover Love official audio",
    "url": "https://www.youtube.com/results?search_query=Hangover%20Love%20official%20audio"
  },
  {
    "title": "Nanatsu no Taizai Season 2 Ending Full『Anly - Beautiful』",
    "query": "Nanatsu no Taizai Season 2 Ending Full『Anly - Beautiful』 official audio",
    "url": "https://www.youtube.com/results?search_query=Nanatsu%20no%20Taizai%20Season%202%20Ending%20Full%E3%80%8EAnly%20-%20Beautiful%E3%80%8F%20official%20audio"
  },
  {
    "title": "Rio 2 Soundtrack - Track 1 - What is Love by Janelle Monae",
    "query": "Rio 2 Soundtrack - Track 1 - What is Love by Janelle Monae official audio",
    "url": "https://www.youtube.com/results?search_query=Rio%202%20Soundtrack%20-%20Track%201%20-%20What%20is%20Love%20by%20Janelle%20Monae%20official%20audio"
  },
  {
    "title": "Marian & Sean - Flames of Love",
    "query": "Marian & Sean - Flames of Love official audio",
    "url": "https://www.youtube.com/results?search_query=Marian%20%26%20Sean%20-%20Flames%20of%20Love%20official%20audio"
  },
  {
    "title": "Bungou stray dogs ending 2",
    "query": "Bungou stray dogs ending 2 official audio",
    "url": "https://www.youtube.com/results?search_query=Bungou%20stray%20dogs%20ending%202%20official%20audio"
  },
  {
    "title": "Creepy Nuts｢Bling-Bang-Bang-Born｣ × TV Anime｢マッシュル-MASHLE-｣ Collaboration Music #BBBBダンス",
    "query": "Creepy Nuts｢Bling-Bang-Bang-Born｣ × TV Anime｢マッシュル-MASHLE-｣ Collaboration Music #BBBBダンス official audio",
    "url": "https://www.youtube.com/results?search_query=Creepy%20Nuts%EF%BD%A2Bling-Bang-Bang-Born%EF%BD%A3%20%C3%97%20TV%20Anime%EF%BD%A2%E3%83%9E%E3%83%83%E3%82%B7%E3%83%A5%E3%83%AB-MASHLE-%EF%BD%A3%20Collaboration%20Music%20%23BBBB%E3%83%80%E3%83%B3%E3%82%B9%20official%20audio"
  },
  {
    "title": "Otonoke",
    "query": "Otonoke official audio",
    "url": "https://www.youtube.com/results?search_query=Otonoke%20official%20audio"
  },
  {
    "title": "ROTTENGRAFFTY - 「70cm四方の窓辺」Music",
    "query": "ROTTENGRAFFTY - 「70cm四方の窓辺」Music official audio",
    "url": "https://www.youtube.com/results?search_query=ROTTENGRAFFTY%20-%20%E3%80%8C70cm%E5%9B%9B%E6%96%B9%E3%81%AE%E7%AA%93%E8%BE%BA%E3%80%8DMusic%20official%20audio"
  },
  {
    "title": "Prover",
    "query": "Prover official audio",
    "url": "https://www.youtube.com/results?search_query=Prover%20official%20audio"
  },
  {
    "title": "Eminem - Tobey",
    "query": "Eminem - Tobey official audio",
    "url": "https://www.youtube.com/results?search_query=Eminem%20-%20Tobey%20official%20audio"
  },
  {
    "title": "This Could Be Us",
    "query": "This Could Be Us official audio",
    "url": "https://www.youtube.com/results?search_query=This%20Could%20Be%20Us%20official%20audio"
  },
  {
    "title": "Tisoki & MineSweepa - See You Again",
    "query": "Tisoki & MineSweepa - See You Again official audio",
    "url": "https://www.youtube.com/results?search_query=Tisoki%20%26%20MineSweepa%20-%20See%20You%20Again%20official%20audio"
  },
  {
    "title": "KDrew - Hysteria",
    "query": "KDrew - Hysteria official audio",
    "url": "https://www.youtube.com/results?search_query=KDrew%20-%20Hysteria%20official%20audio"
  },
  {
    "title": "Ekoh x Nate Vickers - Hurt Myself",
    "query": "Ekoh x Nate Vickers - Hurt Myself official audio",
    "url": "https://www.youtube.com/results?search_query=Ekoh%20x%20Nate%20Vickers%20-%20Hurt%20Myself%20official%20audio"
  },
  {
    "title": "NELKE - 花図鑑 【Music 】",
    "query": "NELKE - 花図鑑 【Music 】 official audio",
    "url": "https://www.youtube.com/results?search_query=NELKE%20-%20%E8%8A%B1%E5%9B%B3%E9%91%91%20%E3%80%90Music%20%E3%80%91%20official%20audio"
  },
  {
    "title": "X-SLIDE",
    "query": "X-SLIDE official audio",
    "url": "https://www.youtube.com/results?search_query=X-SLIDE%20official%20audio"
  },
  {
    "title": "Zedd - Shanti",
    "query": "Zedd - Shanti official audio",
    "url": "https://www.youtube.com/results?search_query=Zedd%20-%20Shanti%20official%20audio"
  },
  {
    "title": "Alan Murin - One Day -",
    "query": "Alan Murin - One Day - official audio",
    "url": "https://www.youtube.com/results?search_query=Alan%20Murin%20-%20One%20Day%20-%20official%20audio"
  },
  {
    "title": "Hanumankind - Big Dawgs ft. Kalmi",
    "query": "Hanumankind - Big Dawgs ft. Kalmi official audio",
    "url": "https://www.youtube.com/results?search_query=Hanumankind%20-%20Big%20Dawgs%20ft.%20Kalmi%20official%20audio"
  },
  {
    "title": "X Ambassadors - Unconsolable",
    "query": "X Ambassadors - Unconsolable official audio",
    "url": "https://www.youtube.com/results?search_query=X%20Ambassadors%20-%20Unconsolable%20official%20audio"
  },
  {
    "title": "KDrew & DEELYLE - Prism",
    "query": "KDrew & DEELYLE - Prism official audio",
    "url": "https://www.youtube.com/results?search_query=KDrew%20%26%20DEELYLE%20-%20Prism%20official%20audio"
  },
  {
    "title": "KDrew - Sometimes",
    "query": "KDrew - Sometimes official audio",
    "url": "https://www.youtube.com/results?search_query=KDrew%20-%20Sometimes%20official%20audio"
  },
  {
    "title": "KDrew - Get Up",
    "query": "KDrew - Get Up official audio",
    "url": "https://www.youtube.com/results?search_query=KDrew%20-%20Get%20Up%20official%20audio"
  },
  {
    "title": "KDrew & Culture Code - Spaces On The Wall",
    "query": "KDrew & Culture Code - Spaces On The Wall official audio",
    "url": "https://www.youtube.com/results?search_query=KDrew%20%26%20Culture%20Code%20-%20Spaces%20On%20The%20Wall%20official%20audio"
  },
  {
    "title": "Zedd ft. Matthew Koma - Spectrum",
    "query": "Zedd ft. Matthew Koma - Spectrum official audio",
    "url": "https://www.youtube.com/results?search_query=Zedd%20ft.%20Matthew%20Koma%20-%20Spectrum%20official%20audio"
  },
  {
    "title": "Rob Simonsen - LFG",
    "query": "Rob Simonsen - LFG official audio",
    "url": "https://www.youtube.com/results?search_query=Rob%20Simonsen%20-%20LFG%20official%20audio"
  },
  {
    "title": "Snareskin - Better",
    "query": "Snareskin - Better official audio",
    "url": "https://www.youtube.com/results?search_query=Snareskin%20-%20Better%20official%20audio"
  },
  {
    "title": "Snareskin x Jaron x Creepa - Saga",
    "query": "Snareskin x Jaron x Creepa - Saga official audio",
    "url": "https://www.youtube.com/results?search_query=Snareskin%20x%20Jaron%20x%20Creepa%20-%20Saga%20official%20audio"
  },
  {
    "title": "Skrillex - Mumbai Power",
    "query": "Skrillex - Mumbai Power official audio",
    "url": "https://www.youtube.com/results?search_query=Skrillex%20-%20Mumbai%20Power%20official%20audio"
  },
  {
    "title": "Tom Frane - Never Let This Go",
    "query": "Tom Frane - Never Let This Go official audio",
    "url": "https://www.youtube.com/results?search_query=Tom%20Frane%20-%20Never%20Let%20This%20Go%20official%20audio"
  },
  {
    "title": "Timeflies Tuesday - Die Young",
    "query": "Timeflies Tuesday - Die Young official audio",
    "url": "https://www.youtube.com/results?search_query=Timeflies%20Tuesday%20-%20Die%20Young%20official%20audio"
  },
  {
    "title": "Timeflies Tuesday - Pompeii",
    "query": "Timeflies Tuesday - Pompeii official audio",
    "url": "https://www.youtube.com/results?search_query=Timeflies%20Tuesday%20-%20Pompeii%20official%20audio"
  },
  {
    "title": "Nicky Youre, dazy - Sunroof",
    "query": "Nicky Youre, dazy - Sunroof official audio",
    "url": "https://www.youtube.com/results?search_query=Nicky%20Youre%2C%20dazy%20-%20Sunroof%20official%20audio"
  },
  {
    "title": "Bastille - Pompeii",
    "query": "Bastille - Pompeii official audio",
    "url": "https://www.youtube.com/results?search_query=Bastille%20-%20Pompeii%20official%20audio"
  },
  {
    "title": "Pompeii",
    "query": "Pompeii official audio",
    "url": "https://www.youtube.com/results?search_query=Pompeii%20official%20audio"
  },
  {
    "title": "Lø Spirit - Down With My Demons",
    "query": "Lø Spirit - Down With My Demons official audio",
    "url": "https://www.youtube.com/results?search_query=L%C3%B8%20Spirit%20-%20Down%20With%20My%20Demons%20official%20audio"
  },
  {
    "title": "Hardwell & Austin Mahone - Creatures Of The Night",
    "query": "Hardwell & Austin Mahone - Creatures Of The Night official audio",
    "url": "https://www.youtube.com/results?search_query=Hardwell%20%26%20Austin%20Mahone%20-%20Creatures%20Of%20The%20Night%20official%20audio"
  },
  {
    "title": "Snareskin - Mad For You",
    "query": "Snareskin - Mad For You official audio",
    "url": "https://www.youtube.com/results?search_query=Snareskin%20-%20Mad%20For%20You%20official%20audio"
  },
  {
    "title": "Snareskin & Twan Ray - Even LA",
    "query": "Snareskin & Twan Ray - Even LA official audio",
    "url": "https://www.youtube.com/results?search_query=Snareskin%20%26%20Twan%20Ray%20-%20Even%20LA%20official%20audio"
  },
  {
    "title": "Go Wild",
    "query": "Go Wild official audio",
    "url": "https://www.youtube.com/results?search_query=Go%20Wild%20official%20audio"
  },
  {
    "title": "Dwonji - COME UP",
    "query": "Dwonji - COME UP official audio",
    "url": "https://www.youtube.com/results?search_query=Dwonji%20-%20COME%20UP%20official%20audio"
  },
  {
    "title": "NURKO & WUKONG & Jordan Shaw - Heart For Rent",
    "query": "NURKO & WUKONG & Jordan Shaw - Heart For Rent official audio",
    "url": "https://www.youtube.com/results?search_query=NURKO%20%26%20WUKONG%20%26%20Jordan%20Shaw%20-%20Heart%20For%20Rent%20official%20audio"
  },
  {
    "title": "Hikaru Utada & Skrillex - Face My Fears",
    "query": "Hikaru Utada & Skrillex - Face My Fears official audio",
    "url": "https://www.youtube.com/results?search_query=Hikaru%20Utada%20%26%20Skrillex%20-%20Face%20My%20Fears%20official%20audio"
  },
  {
    "title": "Belle Sisoski - MOTHER'S CALLING.",
    "query": "Belle Sisoski - MOTHER'S CALLING. official audio",
    "url": "https://www.youtube.com/results?search_query=Belle%20Sisoski%20-%20MOTHER%27S%20CALLING.%20official%20audio"
  },
  {
    "title": "Munn - can you hear me？",
    "query": "Munn - can you hear me？ official audio",
    "url": "https://www.youtube.com/results?search_query=Munn%20-%20can%20you%20hear%20me%EF%BC%9F%20official%20audio"
  },
  {
    "title": "Tom Frane - Don't Leave",
    "query": "Tom Frane - Don't Leave official audio",
    "url": "https://www.youtube.com/results?search_query=Tom%20Frane%20-%20Don%27t%20Leave%20official%20audio"
  },
  {
    "title": "Grey - I Miss You feat. Bahari",
    "query": "Grey - I Miss You feat. Bahari official audio",
    "url": "https://www.youtube.com/results?search_query=Grey%20-%20I%20Miss%20You%20feat.%20Bahari%20official%20audio"
  },
  {
    "title": "Sail North - Unsinkable",
    "query": "Sail North - Unsinkable official audio",
    "url": "https://www.youtube.com/results?search_query=Sail%20North%20-%20Unsinkable%20official%20audio"
  },
  {
    "title": "Andy Grammer - Best of You",
    "query": "Andy Grammer - Best of You official audio",
    "url": "https://www.youtube.com/results?search_query=Andy%20Grammer%20-%20Best%20of%20You%20official%20audio"
  },
  {
    "title": "Wish You Were Here - Touching Song About Missing a Loved One - Sentimental Music",
    "query": "Wish You Were Here - Touching Song About Missing a Loved One - Sentimental Music official audio",
    "url": "https://www.youtube.com/results?search_query=Wish%20You%20Were%20Here%20-%20Touching%20Song%20About%20Missing%20a%20Loved%20One%20-%20Sentimental%20Music%20official%20audio"
  },
  {
    "title": "Allie X - Paper Love",
    "query": "Allie X - Paper Love official audio",
    "url": "https://www.youtube.com/results?search_query=Allie%20X%20-%20Paper%20Love%20official%20audio"
  },
  {
    "title": "Nelly - Just A Dream",
    "query": "Nelly - Just A Dream official audio",
    "url": "https://www.youtube.com/results?search_query=Nelly%20-%20Just%20A%20Dream%20official%20audio"
  },
  {
    "title": "AUD-20240602-WA0006",
    "query": "AUD-20240602-WA0006 official audio",
    "url": "https://www.youtube.com/results?search_query=AUD-20240602-WA0006%20official%20audio"
  },
  {
    "title": "AUD-20240601-WA0026",
    "query": "AUD-20240601-WA0026 official audio",
    "url": "https://www.youtube.com/results?search_query=AUD-20240601-WA0026%20official%20audio"
  },
  {
    "title": "Skrillex and Diplo - ＂Where Are Ü Now＂ with Justin Bieber",
    "query": "Skrillex and Diplo - ＂Where Are Ü Now＂ with Justin Bieber official audio",
    "url": "https://www.youtube.com/results?search_query=Skrillex%20and%20Diplo%20-%20%EF%BC%82Where%20Are%20%C3%9C%20Now%EF%BC%82%20with%20Justin%20Bieber%20official%20audio"
  },
  {
    "title": "Egzod & EMM - Don't Surrender",
    "query": "Egzod & EMM - Don't Surrender official audio",
    "url": "https://www.youtube.com/results?search_query=Egzod%20%26%20EMM%20-%20Don%27t%20Surrender%20official%20audio"
  },
  {
    "title": "Alex Warren - Before You Leave Me",
    "query": "Alex Warren - Before You Leave Me official audio",
    "url": "https://www.youtube.com/results?search_query=Alex%20Warren%20-%20Before%20You%20Leave%20Me%20official%20audio"
  },
  {
    "title": "Alina Baraz feat. Khalid - Floating filous",
    "query": "Alina Baraz feat. Khalid - Floating filous official audio",
    "url": "https://www.youtube.com/results?search_query=Alina%20Baraz%20feat.%20Khalid%20-%20Floating%20filous%20official%20audio"
  },
  {
    "title": "Sigala, The Vamps - We Don't Care",
    "query": "Sigala, The Vamps - We Don't Care official audio",
    "url": "https://www.youtube.com/results?search_query=Sigala%2C%20The%20Vamps%20-%20We%20Don%27t%20Care%20official%20audio"
  },
  {
    "title": "Jim Yosef & Shiah Maisel - Slow Down",
    "query": "Jim Yosef & Shiah Maisel - Slow Down official audio",
    "url": "https://www.youtube.com/results?search_query=Jim%20Yosef%20%26%20Shiah%20Maisel%20-%20Slow%20Down%20official%20audio"
  },
  {
    "title": "Jim Yosef x Robbie Rosen - Story",
    "query": "Jim Yosef x Robbie Rosen - Story official audio",
    "url": "https://www.youtube.com/results?search_query=Jim%20Yosef%20x%20Robbie%20Rosen%20-%20Story%20official%20audio"
  },
  {
    "title": "Before You Exit & Lash - Numb",
    "query": "Before You Exit & Lash - Numb official audio",
    "url": "https://www.youtube.com/results?search_query=Before%20You%20Exit%20%26%20Lash%20-%20Numb%20official%20audio"
  },
  {
    "title": "Before You Exit - Silence",
    "query": "Before You Exit - Silence official audio",
    "url": "https://www.youtube.com/results?search_query=Before%20You%20Exit%20-%20Silence%20official%20audio"
  },
  {
    "title": "Jake Scott - Like This",
    "query": "Jake Scott - Like This official audio",
    "url": "https://www.youtube.com/results?search_query=Jake%20Scott%20-%20Like%20This%20official%20audio"
  },
  {
    "title": "Jake Scott & Josie Dunne - ＂CWJBHN＂",
    "query": "Jake Scott & Josie Dunne - ＂CWJBHN＂ official audio",
    "url": "https://www.youtube.com/results?search_query=Jake%20Scott%20%26%20Josie%20Dunne%20-%20%EF%BC%82CWJBHN%EF%BC%82%20official%20audio"
  },
  {
    "title": "Lø Spirit - Breathe",
    "query": "Lø Spirit - Breathe official audio",
    "url": "https://www.youtube.com/results?search_query=L%C3%B8%20Spirit%20-%20Breathe%20official%20audio"
  },
  {
    "title": "John Michael Howell - Mr. Feel",
    "query": "John Michael Howell - Mr. Feel official audio",
    "url": "https://www.youtube.com/results?search_query=John%20Michael%20Howell%20-%20Mr.%20Feel%20official%20audio"
  },
  {
    "title": "Happy - Kyle Hume",
    "query": "Happy - Kyle Hume official audio",
    "url": "https://www.youtube.com/results?search_query=Happy%20-%20Kyle%20Hume%20official%20audio"
  },
  {
    "title": "Citizen Soldier - Strong For Somebody Else",
    "query": "Citizen Soldier - Strong For Somebody Else official audio",
    "url": "https://www.youtube.com/results?search_query=Citizen%20Soldier%20-%20Strong%20For%20Somebody%20Else%20official%20audio"
  },
  {
    "title": "Citizen Soldier - You Are Enough",
    "query": "Citizen Soldier - You Are Enough official audio",
    "url": "https://www.youtube.com/results?search_query=Citizen%20Soldier%20-%20You%20Are%20Enough%20official%20audio"
  },
  {
    "title": "Silent Child & Patrick Reza - Jump",
    "query": "Silent Child & Patrick Reza - Jump official audio",
    "url": "https://www.youtube.com/results?search_query=Silent%20Child%20%26%20Patrick%20Reza%20-%20Jump%20official%20audio"
  },
  {
    "title": "One Hope - i think i saw a ghost",
    "query": "One Hope - i think i saw a ghost official audio",
    "url": "https://www.youtube.com/results?search_query=One%20Hope%20-%20i%20think%20i%20saw%20a%20ghost%20official%20audio"
  },
  {
    "title": "Jared Benjamin - Flatline “400mg caffeine daily”",
    "query": "Jared Benjamin - Flatline “400mg caffeine daily” official audio",
    "url": "https://www.youtube.com/results?search_query=Jared%20Benjamin%20-%20Flatline%20%E2%80%9C400mg%20caffeine%20daily%E2%80%9D%20official%20audio"
  },
  {
    "title": "ghosthands - beautiful mistake",
    "query": "ghosthands - beautiful mistake official audio",
    "url": "https://www.youtube.com/results?search_query=ghosthands%20-%20beautiful%20mistake%20official%20audio"
  },
  {
    "title": "Benson Boone - Beautiful Things",
    "query": "Benson Boone - Beautiful Things official audio",
    "url": "https://www.youtube.com/results?search_query=Benson%20Boone%20-%20Beautiful%20Things%20official%20audio"
  },
  {
    "title": "AUD-20240427-WA0008",
    "query": "AUD-20240427-WA0008 official audio",
    "url": "https://www.youtube.com/results?search_query=AUD-20240427-WA0008%20official%20audio"
  },
  {
    "title": "Tom Walker - Leave a Light On",
    "query": "Tom Walker - Leave a Light On official audio",
    "url": "https://www.youtube.com/results?search_query=Tom%20Walker%20-%20Leave%20a%20Light%20On%20official%20audio"
  },
  {
    "title": "Tom Frane, STIM - Numb",
    "query": "Tom Frane, STIM - Numb official audio",
    "url": "https://www.youtube.com/results?search_query=Tom%20Frane%2C%20STIM%20-%20Numb%20official%20audio"
  },
  {
    "title": "Virtual Riot - Still Kids",
    "query": "Virtual Riot - Still Kids official audio",
    "url": "https://www.youtube.com/results?search_query=Virtual%20Riot%20-%20Still%20Kids%20official%20audio"
  },
  {
    "title": "Ghost",
    "query": "Ghost official audio",
    "url": "https://www.youtube.com/results?search_query=Ghost%20official%20audio"
  },
  {
    "title": "Ekoh x Lø Spirit- GOOD THINGS",
    "query": "Ekoh x Lø Spirit- GOOD THINGS official audio",
    "url": "https://www.youtube.com/results?search_query=Ekoh%20x%20L%C3%B8%20Spirit-%20GOOD%20THINGS%20official%20audio"
  },
  {
    "title": "Lø Spirit - Good Enough",
    "query": "Lø Spirit - Good Enough official audio",
    "url": "https://www.youtube.com/results?search_query=L%C3%B8%20Spirit%20-%20Good%20Enough%20official%20audio"
  },
  {
    "title": "Lø Spirit - Wild Things",
    "query": "Lø Spirit - Wild Things official audio",
    "url": "https://www.youtube.com/results?search_query=L%C3%B8%20Spirit%20-%20Wild%20Things%20official%20audio"
  },
  {
    "title": "Lø Spirit - Anymore",
    "query": "Lø Spirit - Anymore official audio",
    "url": "https://www.youtube.com/results?search_query=L%C3%B8%20Spirit%20-%20Anymore%20official%20audio"
  },
  {
    "title": "NF - JUST LIKE YOU",
    "query": "NF - JUST LIKE YOU official audio",
    "url": "https://www.youtube.com/results?search_query=NF%20-%20JUST%20LIKE%20YOU%20official%20audio"
  },
  {
    "title": "I'm The Sinner",
    "query": "I'm The Sinner official audio",
    "url": "https://www.youtube.com/results?search_query=I%27m%20The%20Sinner%20official%20audio"
  },
  {
    "title": "Meant To Be",
    "query": "Meant To Be official audio",
    "url": "https://www.youtube.com/results?search_query=Meant%20To%20Be%20official%20audio"
  },
  {
    "title": "OneRepublic - Nobody",
    "query": "OneRepublic - Nobody official audio",
    "url": "https://www.youtube.com/results?search_query=OneRepublic%20-%20Nobody%20official%20audio"
  },
  {
    "title": "David Kushner - Daylight",
    "query": "David Kushner - Daylight official audio",
    "url": "https://www.youtube.com/results?search_query=David%20Kushner%20-%20Daylight%20official%20audio"
  },
  {
    "title": "Crystal Knives - When I'm Okay",
    "query": "Crystal Knives - When I'm Okay official audio",
    "url": "https://www.youtube.com/results?search_query=Crystal%20Knives%20-%20When%20I%27m%20Okay%20official%20audio"
  },
  {
    "title": "SILENCE - Marshmello ft. Khalid - CITIZEN SHADE",
    "query": "SILENCE - Marshmello ft. Khalid - CITIZEN SHADE official audio",
    "url": "https://www.youtube.com/results?search_query=SILENCE%20-%20Marshmello%20ft.%20Khalid%20-%20CITIZEN%20SHADE%20official%20audio"
  },
  {
    "title": "Marshmello ft. Khalid - Silence",
    "query": "Marshmello ft. Khalid - Silence official audio",
    "url": "https://www.youtube.com/results?search_query=Marshmello%20ft.%20Khalid%20-%20Silence%20official%20audio"
  },
  {
    "title": "arrakis",
    "query": "arrakis official audio",
    "url": "https://www.youtube.com/results?search_query=arrakis%20official%20audio"
  },
  {
    "title": "Grey - Crime",
    "query": "Grey - Crime official audio",
    "url": "https://www.youtube.com/results?search_query=Grey%20-%20Crime%20official%20audio"
  },
  {
    "title": "Grey - These Roots",
    "query": "Grey - These Roots official audio",
    "url": "https://www.youtube.com/results?search_query=Grey%20-%20These%20Roots%20official%20audio"
  },
  {
    "title": "GRAHAM & Henrik - Call my name",
    "query": "GRAHAM & Henrik - Call my name official audio",
    "url": "https://www.youtube.com/results?search_query=GRAHAM%20%26%20Henrik%20-%20Call%20my%20name%20official%20audio"
  },
  {
    "title": "Lauv - Lonely Eyes",
    "query": "Lauv - Lonely Eyes official audio",
    "url": "https://www.youtube.com/results?search_query=Lauv%20-%20Lonely%20Eyes%20official%20audio"
  },
  {
    "title": "Lauv - I Like Me Better",
    "query": "Lauv - I Like Me Better official audio",
    "url": "https://www.youtube.com/results?search_query=Lauv%20-%20I%20Like%20Me%20Better%20official%20audio"
  },
  {
    "title": "Dzeko ft. TOKA-J - Heart Speak",
    "query": "Dzeko ft. TOKA-J - Heart Speak official audio",
    "url": "https://www.youtube.com/results?search_query=Dzeko%20ft.%20TOKA-J%20-%20Heart%20Speak%20official%20audio"
  },
  {
    "title": "You",
    "query": "You official audio",
    "url": "https://www.youtube.com/results?search_query=You%20official%20audio"
  },
  {
    "title": "Tom Frane - As It Is Right Now",
    "query": "Tom Frane - As It Is Right Now official audio",
    "url": "https://www.youtube.com/results?search_query=Tom%20Frane%20-%20As%20It%20Is%20Right%20Now%20official%20audio"
  },
  {
    "title": "Chariot",
    "query": "Chariot official audio",
    "url": "https://www.youtube.com/results?search_query=Chariot%20official%20audio"
  },
  {
    "title": "Ryan Mack - Only Human",
    "query": "Ryan Mack - Only Human official audio",
    "url": "https://www.youtube.com/results?search_query=Ryan%20Mack%20-%20Only%20Human%20official%20audio"
  },
  {
    "title": "VOILÀ - Figure You Out",
    "query": "VOILÀ - Figure You Out official audio",
    "url": "https://www.youtube.com/results?search_query=VOIL%C3%80%20-%20Figure%20You%20Out%20official%20audio"
  },
  {
    "title": "Livingston - Home",
    "query": "Livingston - Home official audio",
    "url": "https://www.youtube.com/results?search_query=Livingston%20-%20Home%20official%20audio"
  },
  {
    "title": "Chris James - Thrill Of The Chase",
    "query": "Chris James - Thrill Of The Chase official audio",
    "url": "https://www.youtube.com/results?search_query=Chris%20James%20-%20Thrill%20Of%20The%20Chase%20official%20audio"
  },
  {
    "title": "Ruel - Hard Sometimes",
    "query": "Ruel - Hard Sometimes official audio",
    "url": "https://www.youtube.com/results?search_query=Ruel%20-%20Hard%20Sometimes%20official%20audio"
  },
  {
    "title": "HAARPER - I MIGHT SELF DESTRUCT",
    "query": "HAARPER - I MIGHT SELF DESTRUCT official audio",
    "url": "https://www.youtube.com/results?search_query=HAARPER%20-%20I%20MIGHT%20SELF%20DESTRUCT%20official%20audio"
  },
  {
    "title": "【感情を込めて】ハレハレヤ 歌ってみた ver.Sou",
    "query": "【感情を込めて】ハレハレヤ 歌ってみた ver.Sou official audio",
    "url": "https://www.youtube.com/results?search_query=%E3%80%90%E6%84%9F%E6%83%85%E3%82%92%E8%BE%BC%E3%82%81%E3%81%A6%E3%80%91%E3%83%8F%E3%83%AC%E3%83%8F%E3%83%AC%E3%83%A4%20%E6%AD%8C%E3%81%A3%E3%81%A6%E3%81%BF%E3%81%9F%20ver.Sou%20official%20audio"
  },
  {
    "title": "Kentaro - 空唄",
    "query": "Kentaro - 空唄 official audio",
    "url": "https://www.youtube.com/results?search_query=Kentaro%20-%20%E7%A9%BA%E5%94%84%20official%20audio"
  },
  {
    "title": "Aloe Blacc - My Way",
    "query": "Aloe Blacc - My Way official audio",
    "url": "https://www.youtube.com/results?search_query=Aloe%20Blacc%20-%20My%20Way%20official%20audio"
  },
  {
    "title": "Daniel Seavey - Runaway",
    "query": "Daniel Seavey - Runaway official audio",
    "url": "https://www.youtube.com/results?search_query=Daniel%20Seavey%20-%20Runaway%20official%20audio"
  },
  {
    "title": "AUD-20240301-WA0013",
    "query": "AUD-20240301-WA0013 official audio",
    "url": "https://www.youtube.com/results?search_query=AUD-20240301-WA0013%20official%20audio"
  },
  {
    "title": "Sinizter, Sadfriendd & RAIZHELL - ELEVATE! 「4K 60FPS」",
    "query": "Sinizter, Sadfriendd & RAIZHELL - ELEVATE! 「4K 60FPS」 official audio",
    "url": "https://www.youtube.com/results?search_query=Sinizter%2C%20Sadfriendd%20%26%20RAIZHELL%20-%20ELEVATE%21%20%E3%80%8C4K%2060FPS%E3%80%8D%20official%20audio"
  },
  {
    "title": "STIM - adonis",
    "query": "STIM - adonis official audio",
    "url": "https://www.youtube.com/results?search_query=STIM%20-%20adonis%20official%20audio"
  },
  {
    "title": "Martin Garrix & Mesto - Breakaway",
    "query": "Martin Garrix & Mesto - Breakaway official audio",
    "url": "https://www.youtube.com/results?search_query=Martin%20Garrix%20%26%20Mesto%20-%20Breakaway%20official%20audio"
  },
  {
    "title": "STIM & RJ Pasin - standing ＂if i lose it all reborn from the wreckage＂",
    "query": "STIM & RJ Pasin - standing ＂if i lose it all reborn from the wreckage＂ official audio",
    "url": "https://www.youtube.com/results?search_query=STIM%20%26%20RJ%20Pasin%20-%20standing%20%EF%BC%82if%20i%20lose%20it%20all%20reborn%20from%20the%20wreckage%EF%BC%82%20official%20audio"
  },
  {
    "title": "STIM - afterlife",
    "query": "STIM - afterlife official audio",
    "url": "https://www.youtube.com/results?search_query=STIM%20-%20afterlife%20official%20audio"
  },
  {
    "title": "stim - stain",
    "query": "stim - stain official audio",
    "url": "https://www.youtube.com/results?search_query=stim%20-%20stain%20official%20audio"
  },
  {
    "title": "stim - fury",
    "query": "stim - fury official audio",
    "url": "https://www.youtube.com/results?search_query=stim%20-%20fury%20official%20audio"
  },
  {
    "title": "SHUT UP!",
    "query": "SHUT UP! official audio",
    "url": "https://www.youtube.com/results?search_query=SHUT%20UP%21%20official%20audio"
  },
  {
    "title": "Jordan Adetunji - INVOLVED",
    "query": "Jordan Adetunji - INVOLVED official audio",
    "url": "https://www.youtube.com/results?search_query=Jordan%20Adetunji%20-%20INVOLVED%20official%20audio"
  },
  {
    "title": "Tom Frane - Tiny Fractures",
    "query": "Tom Frane - Tiny Fractures official audio",
    "url": "https://www.youtube.com/results?search_query=Tom%20Frane%20-%20Tiny%20Fractures%20official%20audio"
  },
  {
    "title": "Tom Frane - Unstable",
    "query": "Tom Frane - Unstable official audio",
    "url": "https://www.youtube.com/results?search_query=Tom%20Frane%20-%20Unstable%20official%20audio"
  },
  {
    "title": "Right Now - Brxn, RJ Pasin - Cover",
    "query": "Right Now - Brxn, RJ Pasin - Cover official audio",
    "url": "https://www.youtube.com/results?search_query=Right%20Now%20-%20Brxn%2C%20RJ%20Pasin%20-%20Cover%20official%20audio"
  },
  {
    "title": "all out of love w/ rj pasin",
    "query": "all out of love w/ rj pasin official audio",
    "url": "https://www.youtube.com/results?search_query=all%20out%20of%20love%20w/%20rj%20pasin%20official%20audio"
  },
  {
    "title": "Doomsday - Jared Benjamin",
    "query": "Doomsday - Jared Benjamin official audio",
    "url": "https://www.youtube.com/results?search_query=Doomsday%20-%20Jared%20Benjamin%20official%20audio"
  },
  {
    "title": "Avicii - The Nights ＂my father told me＂",
    "query": "Avicii - The Nights ＂my father told me＂ official audio",
    "url": "https://www.youtube.com/results?search_query=Avicii%20-%20The%20Nights%20%EF%BC%82my%20father%20told%20me%EF%BC%82%20official%20audio"
  },
  {
    "title": "Spider-Man： Across the Spider-Verse - ＂Am I Dreaming＂ Metro Boomin x A$AP Rocky x Roisee",
    "query": "Spider-Man： Across the Spider-Verse - ＂Am I Dreaming＂ Metro Boomin x A$AP Rocky x Roisee official audio",
    "url": "https://www.youtube.com/results?search_query=Spider-Man%EF%BC%9A%20Across%20the%20Spider-Verse%20-%20%EF%BC%82Am%20I%20Dreaming%EF%BC%82%20Metro%20Boomin%20x%20A%24AP%20Rocky%20x%20Roisee%20official%20audio"
  },
  {
    "title": "Khantrast - SUKUNA FREESTYLE",
    "query": "Khantrast - SUKUNA FREESTYLE official audio",
    "url": "https://www.youtube.com/results?search_query=Khantrast%20-%20SUKUNA%20FREESTYLE%20official%20audio"
  },
  {
    "title": "Alessia Cara - Here",
    "query": "Alessia Cara - Here official audio",
    "url": "https://www.youtube.com/results?search_query=Alessia%20Cara%20-%20Here%20official%20audio"
  },
  {
    "title": "Coldplay - Hymn For The Weekend",
    "query": "Coldplay - Hymn For The Weekend official audio",
    "url": "https://www.youtube.com/results?search_query=Coldplay%20-%20Hymn%20For%20The%20Weekend%20official%20audio"
  },
  {
    "title": "Shawn Mendes - There's Nothing Holding Me Back",
    "query": "Shawn Mendes - There's Nothing Holding Me Back official audio",
    "url": "https://www.youtube.com/results?search_query=Shawn%20Mendes%20-%20There%27s%20Nothing%20Holding%20Me%20Back%20official%20audio"
  },
  {
    "title": "OneRepublic - Counting Stars",
    "query": "OneRepublic - Counting Stars official audio",
    "url": "https://www.youtube.com/results?search_query=OneRepublic%20-%20Counting%20Stars%20official%20audio"
  },
  {
    "title": "The Kid LAROI - WITHOUT YOU",
    "query": "The Kid LAROI - WITHOUT YOU official audio",
    "url": "https://www.youtube.com/results?search_query=The%20Kid%20LAROI%20-%20WITHOUT%20YOU%20official%20audio"
  },
  {
    "title": "The Chainsmokers & Coldplay - Something Just Like This",
    "query": "The Chainsmokers & Coldplay - Something Just Like This official audio",
    "url": "https://www.youtube.com/results?search_query=The%20Chainsmokers%20%26%20Coldplay%20-%20Something%20Just%20Like%20This%20official%20audio"
  },
  {
    "title": "GASSHOW",
    "query": "GASSHOW official audio",
    "url": "https://www.youtube.com/results?search_query=GASSHOW%20official%20audio"
  },
  {
    "title": "Moonthief / キタニタツヤ - Moonthief / Tatsuya Kitani",
    "query": "Moonthief / キタニタツヤ - Moonthief / Tatsuya Kitani official audio",
    "url": "https://www.youtube.com/results?search_query=Moonthief%20/%20%E3%82%AD%E3%82%BF%E3%83%8B%E3%82%BF%E3%83%84%E3%83%A4%20-%20Moonthief%20/%20Tatsuya%20Kitani%20official%20audio"
  },
  {
    "title": "秋山黄色『SCRAP BOOOO』",
    "query": "秋山黄色『SCRAP BOOOO』 official audio",
    "url": "https://www.youtube.com/results?search_query=%E7%A7%8B%E5%B1%B1%E9%BB%84%E8%89%B2%E3%80%8ESCRAP%20BOOOO%E3%80%8F%20official%20audio"
  },
  {
    "title": "真夜中のドア - 松原みき - Cover by Chris Andrian Yang",
    "query": "真夜中のドア - 松原みき - Cover by Chris Andrian Yang official audio",
    "url": "https://www.youtube.com/results?search_query=%E7%9C%9F%E5%A4%9C%E4%B8%AD%E3%81%AE%E3%83%89%E3%82%A2%20-%20%E6%9D%BE%E5%8E%9F%E3%81%BF%E3%81%8D%20-%20Cover%20by%20Chris%20Andrian%20Yang%20official%20audio"
  },
  {
    "title": "Virtual Riot - Lunar",
    "query": "Virtual Riot - Lunar official audio",
    "url": "https://www.youtube.com/results?search_query=Virtual%20Riot%20-%20Lunar%20official%20audio"
  },
  {
    "title": "Grey - RAVEN",
    "query": "Grey - RAVEN official audio",
    "url": "https://www.youtube.com/results?search_query=Grey%20-%20RAVEN%20official%20audio"
  },
  {
    "title": "Grey - IDK",
    "query": "Grey - IDK official audio",
    "url": "https://www.youtube.com/results?search_query=Grey%20-%20IDK%20official%20audio"
  },
  {
    "title": "Elley Duhé - Middle of the Night",
    "query": "Elley Duhé - Middle of the Night official audio",
    "url": "https://www.youtube.com/results?search_query=Elley%20Duh%C3%A9%20-%20Middle%20of%20the%20Night%20official%20audio"
  },
  {
    "title": "AURORA - Runaway",
    "query": "AURORA - Runaway official audio",
    "url": "https://www.youtube.com/results?search_query=AURORA%20-%20Runaway%20official%20audio"
  },
  {
    "title": "Kataomoi - Aimer",
    "query": "Kataomoi - Aimer official audio",
    "url": "https://www.youtube.com/results?search_query=Kataomoi%20-%20Aimer%20official%20audio"
  },
  {
    "title": "Superhero Perfect Version",
    "query": "Superhero Perfect Version official audio",
    "url": "https://www.youtube.com/results?search_query=Superhero%20Perfect%20Version%20official%20audio"
  },
  {
    "title": "OneRepublic, Assassin's Creed, Mishaal Tamer - Mirage",
    "query": "OneRepublic, Assassin's Creed, Mishaal Tamer - Mirage official audio",
    "url": "https://www.youtube.com/results?search_query=OneRepublic%2C%20Assassin%27s%20Creed%2C%20Mishaal%20Tamer%20-%20Mirage%20official%20audio"
  },
  {
    "title": "Central Cee ft. Billie Eilish & Khaled - Ungrateful Prod. Capxn",
    "query": "Central Cee ft. Billie Eilish & Khaled - Ungrateful Prod. Capxn official audio",
    "url": "https://www.youtube.com/results?search_query=Central%20Cee%20ft.%20Billie%20Eilish%20%26%20Khaled%20-%20Ungrateful%20Prod.%20Capxn%20official%20audio"
  },
  {
    "title": "JBEE x Central Cee - lovely",
    "query": "JBEE x Central Cee - lovely official audio",
    "url": "https://www.youtube.com/results?search_query=JBEE%20x%20Central%20Cee%20-%20lovely%20official%20audio"
  },
  {
    "title": "04. レッドネオン",
    "query": "04. レッドネオン official audio",
    "url": "https://www.youtube.com/results?search_query=04.%20%E3%83%AC%E3%83%83%E3%83%89%E3%83%8D%E3%82%AA%E3%83%B3%20official%20audio"
  },
  {
    "title": "03. Your Light",
    "query": "03. Your Light official audio",
    "url": "https://www.youtube.com/results?search_query=03.%20Your%20Light%20official%20audio"
  },
  {
    "title": "02. Tell me",
    "query": "02. Tell me official audio",
    "url": "https://www.youtube.com/results?search_query=02.%20Tell%20me%20official%20audio"
  },
  {
    "title": "01. Prover",
    "query": "01. Prover official audio",
    "url": "https://www.youtube.com/results?search_query=01.%20Prover%20official%20audio"
  }
];

export default songs;
