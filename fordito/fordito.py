angolmagyar=open('angolmagyar.txt', 'r')
angol=[]
magyar=[]

for s in angolmagyar:
    sor=s.strip()
    word=sor.split(' - ')
    angol.append(word[0])
    magyar.append(word[1])
while True:
    bekert = input('Milyen nyelvről szeretne fordítani? (Kérem írjon "angol"-t vagy "magyar"-t!) Ha ki akar lépni kérem írjon "!"-t: ')
    if bekert=='!':
        print('Vége!')
        break
    if bekert.lower()=='angol':
        print('Fordítandó szó:')
        fordito = input()
        if fordito not in angol:
            print('Ez a kifejezés még nincs megadva a szótárban!')
            mit_jelent=input('Mit jelent?: ')
            angol.append(fordito)
            magyar.append(mit_jelent)
            file=open('angolmagyar.txt', 'w')
            for s in range(len(angol)):
                print(angol[s]+' - '+magyar[s], file=file)
            file.close()
        else:
            for s in range(len(angol)):
                if fordito==angol[s]:
                    print('Jelentése: '+ magyar[s])
                    break
    if bekert.lower()=='magyar':

        print('Fordítandó szó:')
        fordito = input()
        if fordito not in magyar:
            print('Ez a kifejezés még nincs megadva a szótárban!')
            mit_jelent=input('Angol megfelelője: ')
            angol.append(mit_jelent)
            magyar.append(fordito)
            file=open('angolmagyar.txt', 'w')
            for s in range(len(angol)):
                print(angol[s]+' - '+magyar[s], file=file)
            file.close()
        else:
            for s in range(len(angol)):
                if fordito==magyar[s]:
                    print('Angol megfelelője: '+ angol[s])

angolmagyar.close()