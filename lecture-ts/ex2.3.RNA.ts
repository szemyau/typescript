//3. This RNATranscription function

export function rnaTranscription(dna:string|string[]):string{
    let rna:string = "";
    for (let nucleotide of dna) {  //TODO  1.cant insert data type in nucleotide
      switch (nucleotide) {
        case "G":
          rna += "C";
          break;
        case "C":
          rna += "G";
          break;
        case "T":
          rna += "A";
          break;
        case "A":
          rna += "U";
          break;
        default:
          throw new Error(`The nucleotide ${nucleotide} does not exist`);
      }
    }
    return rna;
  }

  function test(dna:string|string[]) {
    console.log('-'.repeat(35));
    console.log('dna', dna);
    console.log('rna', rnaTranscription(dna));
  }

  test("ACTG");
  test(["C", "G", "T", "A"]);