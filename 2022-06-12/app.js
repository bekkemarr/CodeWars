//8kyu `DNA to RNA Conversion`

//Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

//Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

//Create a function which translates a given DNA string into RNA.

//P One parameter - dna
//R Return a all T's changed to U's
//E "GCAT"  =>  "GCAU"
//P Split the item "T" and rejoin "U"

function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    return dna.split("T").join("U")
  }