def sortNumber(kata):
    data_kata = [c for c in kata]
    list_angka= []
    for i in data_kata:
        try:
            temp = int(i)
            list_angka.append(temp)
        except:
            continue
    if(len(list_angka) == 0):
        print("No Number found in parameter !")
    else:
         for i in range(len(list_angka)):
             angka_terendah = i
             for j in range(i + 1, len(list_angka)):
                 if list_angka[j] < list_angka[angka_terendah]:
                     angka_terendah = j
             temp = list_angka[i]
             list_angka[i] = list_angka[angka_terendah]
             list_angka[angka_terendah] = temp
         huruf_baru = ""
         for x in list_angka:
             huruf_baru+= str(x)
         print(huruf_baru)  
sortNumber("48172a94")
sortNumber("abc")
sortNumber("94a")          