kata = "AAERKDMY"
def printWords(kata):
    huruf_vokal = ["a","i","u","e","o","A","I","U","E","O"]
    list_vokal = []
    list_konsonan = []
    data_huruf = [c for c in kata]
    for i in data_huruf:
        if(i in huruf_vokal):
            list_vokal.append(i)
        else:
            list_konsonan.append(i)
    gabung = list_vokal + list_konsonan
    for c in gabung:
        print(c)

printWords(kata)