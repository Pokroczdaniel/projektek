import random
nev=input('Kérem adja meg a nevét: ')
print('Üdvözlöm, '+ nev+'!')
print('Szeretne játszani? (Kérem írjon "igen"-t vagy "nem"-et.)')
kerdes=input()
if kerdes.lower()=='igen':
    x=random.randint(1,1001)
    nyert=0
    print('Szuper! Gondoltam egy számra 1 és 1000 között. Kitalálod?')
    while True:
        try:
            szam=int(input('Tipp: '))
            if szam==x:
                print('Nagyszerű, kitaláltad!')
                nyert += 1
                uj_kor=input('Szeretne még egyet játszani? ("igen" vagy "nem") ')
                if uj_kor.lower()=='nem':
                    print('Rendben. Viszontlátásra!')
                    print('Megnyert játékok: '+str(nyert))
                    break
                elif uj_kor.lower()=='igen':
                    x = random.randint(1, 1001)
                    print('Gondoltam egy új számra! Kitalálod?')
            elif szam<x:
                print('A gondolt szám nagyobb!')
            else:
                print('A gondolt szám kisebb!')
        except ValueError:
            print('Nem jó értéket adott meg!')
else:
    print('Értem. Majd legközelebb')