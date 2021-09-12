'''
Egy üzenet rendező program.

Az első helyen a küldő, a második helyen a címzett neve szerepel, majd az üzenet

input példa:
János Péter 10:12 Jó napot!
Péter János 10:15 Helo. Hogy vagy?
János Józsi 10:10 Nem mondod, gratulálok!
Péter János 10:18 Hol vagy?
Péter János 10:25 Semmi különös.
János Péter 10:20 Otthon. Veled mi újság?
'''
def db_max(lista):
    max=0
    for i in range(len(lista)):
        db=0
        for ch in lista[i]:
            db+=1
            if db>max:
                max=db
    return max
def idopont_rendez(idopont):
    n=len(idopont)
    a=[]
    b=[]
    db=0
    rendezett=[]
    for i in range(len(idopont)):
        x=idopont[i].split(':')
        a.append(int(x[0]))
        b.append(int(x[1]))
    for i in range(n-1):
        x=''
        for j in range(i+1, n):
            if a[i]>=a[j]:
                b[i], b[j] = b[j], b[i]
                a[i], a[j] = a[j], a[i]
            if a[i]==a[j]:
                if b[i]>b[j]:
                    b[i],b[j]=b[j],b[i]
                    a[i],a[j]=a[j],a[i]
            if db==n-2:
                if b[j] < 10:
                    v = str(a[j]) + ':' +'0'+str(b[j])
                else:
                    v=str(a[j])+':'+str(b[j])
        if b[i]<10:
            x = str(a[i]) + ':' +'0'+str(b[i])
        elif b[i]>=10:
            x=str(a[i])+':'+str(b[i])
        db+=1
        rendezett.append(x)
    rendezett.append(v)
    return rendezett
def feladat(n):

    try:
        n=int(n)
        kitol=[]
        kinek=[]
        idopont=[]
        szoveg=[]

        for i in range(n):
            uzenet = input()
            uzenet_lista = uzenet.split(' ')
            kitol.append(uzenet_lista[0])
            kinek.append(uzenet_lista[1])
            idopont.append(uzenet_lista[2])
            szoveg.append(uzenet_lista[3:])
        uj_kitol=[]

        for i in kitol:
            if i not in uj_kitol:
                uj_kitol.append(i)
        uj_kitol.sort()
        kitol_maxdb = db_max(kitol)
        kinek_maxdb = db_max(kinek)
        b = ' ' * kitol_maxdb + ' '
        a=b+' '*kinek_maxdb
        s = idopont_rendez(idopont)
        for i in range(len(uj_kitol)):
            print(uj_kitol[i])
            uj_kinek = []
            for j in range(len(kitol)):
                if uj_kitol[i]==kitol[j] and kinek[j] not in uj_kinek:
                    uj_kinek.append(kinek[j])
            uj_kinek.sort()
            for r in range(len(uj_kinek)):
                print(b+ uj_kinek[r])
                for elem in range(len(szoveg)):
                    if kitol[elem]==uj_kitol[i] and kinek[elem]==uj_kinek[r]:
                        for d in range(len(s)):
                            if s[d]==idopont[elem]:
                                u = ''
                                for g in szoveg[elem]:
                                    u+=g+' '

                                print(a,idopont[elem],u[:-1])
    except ValueError:
        print('Nem jó számot adott meg paraméterként!')
feladat(6)