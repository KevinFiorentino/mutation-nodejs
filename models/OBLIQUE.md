1. Primero usamos una función generadora para generar, valga la redundancia, mini arrays a partir del original que tengan un máximo de 4 filas

['ATGC']
['CAGT']
['TCAG']
['TTCA']
['TTGG']
['CCAT']

A partir del array anterior que se utilizará como ejemplo, generamos los siguientes tres mini array que toman las filas 1234, 2345 y 3456:

['ATGC']
['CAGT']
['TCAG']
['TTGA']

['CAGT']
['TCAG']
['TTGA']
['TTGG']

['TCAG']
['TTGA']
['TTGG']
['CCAT']

2. Usamos YIELD para obtener cada mini array a medida que sea necesario, si el algoritmo cumple con la mutación, no continua. Con cada uno de estos arrays corremos a la izquierda una vez la fila dos, dos veces la tres y tres veces la cuarta:

['ATGC']
['CAGT']
['TCAG']
['TTGA']

El array anterior quedaría:

['ATGC']
['AGTC']
['AGTC']
['ATTG']

3. Giramos la matriz 90 grados:

['AAAA']
['TGGT']
['TTTG']
['GCCC']

4. Ahora en horizontal, luego de crear mini arrays para analizar uno por uno, de correr sus valores a la izquierda y girar la matriz 90 grados, se hace más facil encontrar la mutación.
