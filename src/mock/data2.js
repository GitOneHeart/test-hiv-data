export default {
  "data": {
    "currentVersion": {
      "text": "HIVDB_8.9-1",
      "publishDate": "2019-10-25"
    },
    "currentProgramVersion": {
      "text": "3.0.7-1",
      "publishDate": "2020-10-22"
    },
    "mutationsAnalysis": {
      "validationResults": [],
      "drugResistance": [
        {
          "algorithm": {
            "family": "HIVDB",
            "version": "8.9-1",
            "publishDate": "2019-10-25"
          },
          "gene": {
            "name": "PR",
            "drugClasses": [
              {
                "name": "PI",
                "fullName": "Protease Inhibitor"
              }
            ]
          },
          "levels": [
            {
              "drugClass": {
                "name": "PI"
              },
              "drug": {
                "name": "ATV",
                "displayAbbr": "ATV/r",
                "fullName": "atazanavir/r"
              },
              "text": "High-Level Resistance"
            },
            {
              "drugClass": {
                "name": "PI"
              },
              "drug": {
                "name": "DRV",
                "displayAbbr": "DRV/r",
                "fullName": "darunavir/r"
              },
              "text": "High-Level Resistance"
            },
            {
              "drugClass": {
                "name": "PI"
              },
              "drug": {
                "name": "FPV",
                "displayAbbr": "FPV/r",
                "fullName": "fosamprenavir/r"
              },
              "text": "High-Level Resistance"
            },
            {
              "drugClass": {
                "name": "PI"
              },
              "drug": {
                "name": "IDV",
                "displayAbbr": "IDV/r",
                "fullName": "indinavir/r"
              },
              "text": "High-Level Resistance"
            },
            {
              "drugClass": {
                "name": "PI"
              },
              "drug": {
                "name": "LPV",
                "displayAbbr": "LPV/r",
                "fullName": "lopinavir/r"
              },
              "text": "High-Level Resistance"
            },
            {
              "drugClass": {
                "name": "PI"
              },
              "drug": {
                "name": "NFV",
                "displayAbbr": "NFV",
                "fullName": "nelfinavir"
              },
              "text": "High-Level Resistance"
            },
            {
              "drugClass": {
                "name": "PI"
              },
              "drug": {
                "name": "SQV",
                "displayAbbr": "SQV/r",
                "fullName": "saquinavir/r"
              },
              "text": "High-Level Resistance"
            },
            {
              "drugClass": {
                "name": "PI"
              },
              "drug": {
                "name": "TPV",
                "displayAbbr": "TPV/r",
                "fullName": "tipranavir/r"
              },
              "text": "High-Level Resistance"
            }
          ],
          "mutationsByTypes": [
            {
              "mutationType": "Major",
              "mutations": [
                {
                  "text": "D30N",
                  "isUnsequenced": false
                },
                {
                  "text": "V32I",
                  "isUnsequenced": false
                },
                {
                  "text": "M46I",
                  "isUnsequenced": false
                },
                {
                  "text": "I47A",
                  "isUnsequenced": false
                },
                {
                  "text": "G48A",
                  "isUnsequenced": false
                },
                {
                  "text": "I50L",
                  "isUnsequenced": false
                },
                {
                  "text": "I54A",
                  "isUnsequenced": false
                },
                {
                  "text": "L76V",
                  "isUnsequenced": false
                },
                {
                  "text": "V82A",
                  "isUnsequenced": false
                },
                {
                  "text": "I84A",
                  "isUnsequenced": false
                },
                {
                  "text": "L90M",
                  "isUnsequenced": false
                }
              ]
            },
            {
              "mutationType": "Accessory",
              "mutations": [
                {
                  "text": "L10F",
                  "isUnsequenced": false
                },
                {
                  "text": "L23I",
                  "isUnsequenced": false
                },
                {
                  "text": "L24F",
                  "isUnsequenced": false
                },
                {
                  "text": "L33F",
                  "isUnsequenced": false
                },
                {
                  "text": "K43T",
                  "isUnsequenced": false
                },
                {
                  "text": "F53L",
                  "isUnsequenced": false
                },
                {
                  "text": "Q58E",
                  "isUnsequenced": false
                },
                {
                  "text": "G73A",
                  "isUnsequenced": false
                },
                {
                  "text": "T74P",
                  "isUnsequenced": false
                },
                {
                  "text": "N83D",
                  "isUnsequenced": false
                },
                {
                  "text": "N88D",
                  "isUnsequenced": false
                }
              ]
            },
            {
              "mutationType": "Other",
              "mutations": [
                {
                  "text": "V11I",
                  "isUnsequenced": false
                },
                {
                  "text": "I13V",
                  "isUnsequenced": false
                },
                {
                  "text": "K20I",
                  "isUnsequenced": false
                },
                {
                  "text": "E35G",
                  "isUnsequenced": false
                },
                {
                  "text": "M36I",
                  "isUnsequenced": false
                },
                {
                  "text": "L63P",
                  "isUnsequenced": false
                },
                {
                  "text": "A71I",
                  "isUnsequenced": false
                },
                {
                  "text": "V77I",
                  "isUnsequenced": false
                },
                {
                  "text": "I85V",
                  "isUnsequenced": false
                },
                {
                  "text": "L89I",
                  "isUnsequenced": false
                },
                {
                  "text": "I93L",
                  "isUnsequenced": false
                }
              ]
            }
          ],
          "commentsByTypes": [
            {
              "commentType": "Major",
              "comments": [
                {
                  "name": "PR30N",
                  "text": "D30N is a non-polymorphic mutation that causes high-level resistance to NFV.",
                  "highlightText": [
                    "D30N"
                  ]
                },
                {
                  "name": "PR32I",
                  "text": "V32I is a non-polymorphic PI-selected mutation associated with reduced susceptibility to each of the PIs except SQV. It is included in the Tibotec DRV genotypic susceptibility score.",
                  "highlightText": [
                    "V32I"
                  ]
                },
                {
                  "name": "PR46IL",
                  "text": "M46I/L are relatively non-polymorphic PI-selected mutations. In combination with other PI-resistance mutations, they are associated with reduced susceptibility to each of the PIs except DRV.",
                  "highlightText": [
                    "M46I"
                  ]
                },
                {
                  "name": "PR47A",
                  "text": "I47A is a non-polymorphic mutation selected by LPV. It usually occurs in combination with V32I and in this context it confers high-level resistance to LPV and FPV and low/intermediate-resistance to the remaining PIs except ATV and SQV.",
                  "highlightText": [
                    "I47A"
                  ]
                },
                {
                  "name": "PR48ASTQL",
                  "text": "G48V is a non-polymorphic mutation selected by SQV and, less often, by IDV and LPV. It confers high-level resistance to SQV, intermediate resistance to ATV, and low-level resistance to NFV, IDV and LPV. G48M is a non-polymorphic mutation selected in viruses with multiple PI-resistance mutations. Its effects appear to be similar to those of G48V. G48A/S/T/Q are rare non-polymorphic mutations selected in viruses with multiple PI-resistance mutations.",
                  "highlightText": [
                    "G48A"
                  ]
                },
                {
                  "name": "PR50L",
                  "text": "I50L is a non-polymorphic mutation selected by ATV. It causes high-level resistance to ATV and increases susceptibility to most of the remaining PIs.",
                  "highlightText": [
                    "I50L"
                  ]
                },
                {
                  "name": "PR54ATS",
                  "text": "I54A/T/S are non-polymorphic PI-selected mutations that occur almost exclusively in viruses with multiple PI-resistance mutations. I54A/T/S are associated with reduced susceptibility to each of the PIs except DRV.",
                  "highlightText": [
                    "I54A"
                  ]
                },
                {
                  "name": "PR76V",
                  "text": "L76V is a non-polymorphic mutation selected by IDV, LPV and DRV. It reduces susceptibility to these PIs and to FPV and NFV. It increases susceptibility to ATV, SQV and TPV. L76V is included in the Tibotec DRV genotypic susceptibility score.",
                  "highlightText": [
                    "L76V"
                  ]
                },
                {
                  "name": "PR82A",
                  "text": "V82A is a non-polymorphic mutation selected primarily by IDV and LPV. It reduces susceptibility to these PIs and contributes cross-resistance to each of the remaining PIs except DRV and TPV.",
                  "highlightText": [
                    "V82A"
                  ]
                },
                {
                  "name": "PR84AC",
                  "text": "I84A is an extremely rare non-polymorphic PI-selected substrate-cleft mutation associated with high-level resistance to each of the PIs except possibly DRV. I84C is an extremely rare non-polymorphic PI-selected mutation associated with varying degrees of reduced susceptibility to each of the PIs.",
                  "highlightText": [
                    "I84A"
                  ]
                },
                {
                  "name": "PR90M",
                  "text": "L90M is a non-polymorphic PI-selected mutation that reduces susceptibility to each of the PIs except TPV and DRV.",
                  "highlightText": [
                    "L90M"
                  ]
                }
              ]
            },
            {
              "commentType": "Accessory",
              "comments": [
                {
                  "name": "PR10F",
                  "text": "L10F is a common non-polymorphic, PI-selected accessory mutation associated with reduced susceptibility to DRV, FPV, IDV, LPV, and NFV.",
                  "highlightText": [
                    "L10F"
                  ]
                },
                {
                  "name": "PR23I",
                  "text": "L23I is an uncommon non-polymorphic mutation selected primarily by NFV. It causes low-level NFV resistance.",
                  "highlightText": [
                    "L23I"
                  ]
                },
                {
                  "name": "PR24FM",
                  "text": "L24I is a non-polymorphic mutation selected by IDV and LPV. It contributes reduced susceptibility to each PI except DRV and TPV. L24F/M are uncommon non-polymorphic PI-selected mutations. L24F has a susceptibility profile similar to L24I.",
                  "highlightText": [
                    "L24F"
                  ]
                },
                {
                  "name": "PR33F",
                  "text": "L33F is a relatively non-polymorphic accessory mutation selected by each of the PIs. In combination with other PI-resistance mutations, it is associated with reduced susceptibility to each of the PIs. It is included in the Tibotec DRV genotypic susceptibility score.",
                  "highlightText": [
                    "L33F"
                  ]
                },
                {
                  "name": "PR43T",
                  "text": "K43T is a non-polymorphic PI-selected accessory mutation. K43T is included in the Boehringer-Ingelheim TPV genotypic susceptibility score.",
                  "highlightText": [
                    "K43T"
                  ]
                },
                {
                  "name": "PR53L",
                  "text": "F53L is a non-polymorphic accessory PI-selected mutation that reduces susceptibility primarily to ATV, SQV, and NFV.",
                  "highlightText": [
                    "F53L"
                  ]
                },
                {
                  "name": "PR58E",
                  "text": "Q58E is a non-polymorphic accessory PI-selected mutation associated with reduced susceptibility to TPV and possibly other PIs.",
                  "highlightText": [
                    "Q58E"
                  ]
                },
                {
                  "name": "PR73STCADV",
                  "text": "G73S/T/C/A are non-polymorphic accessory PI-selected mutations. They are associated primarily with reduced susceptibility to ATV, SQV, FPV, IDV, and NFV. G73V/D are rare non-polymorphic PI-selected mutations.",
                  "highlightText": [
                    "G73A"
                  ]
                },
                {
                  "name": "PR74P",
                  "text": "T74P is a non-polymorphic PI-selected accessory mutation that occurs primarily in viruses from patients who have received multiple PIs. It is associated with reduced susceptibility to each of the PIs. It is included in the Boehringer-Ingelheim TPV and Tibotec DRV genotypic susceptibility scores.",
                  "highlightText": [
                    "T74P"
                  ]
                },
                {
                  "name": "PR83D",
                  "text": "N83D is a non-polymorphic mutation selected primarily in patients who have received multiple PIs. It is included in the Boehringer-Ingelheim genotypic susceptibility score for TPV.",
                  "highlightText": [
                    "N83D"
                  ]
                },
                {
                  "name": "PR88D",
                  "text": "N88D is a non-polymorphic mutation selected by NFV usually in combination with D30N. It reduces NFV susceptibility and may cause low-level cross-resistance to ATV and SQV.",
                  "highlightText": [
                    "N88D"
                  ]
                }
              ]
            },
            {
              "commentType": "Other",
              "comments": [
                {
                  "name": "PR11IL",
                  "text": "V11I is a relatively non-polymorphic accessory mutation selected in patients receiving DRV. It is included in the Tibotec DRV genotypic susceptibility score. V11L is a nonpolymorphic PI-selected mutation associated with reduced DRV and FPV susceptibility when it occurs in combination with other PI-resistance mutations.",
                  "highlightText": [
                    "V11I"
                  ]
                },
                {
                  "name": "PR20I",
                  "text": "K20I is the consensus amino acid in subtype G and CRF02_AG. In subtypes B and C, K20I is a PI-selected accessory mutation that reduces NFV susceptibility.",
                  "highlightText": [
                    "K20I"
                  ]
                },
                {
                  "name": "PR71IL",
                  "text": "A71I/L are non-polymorphic, PI-selected accessory mutations that appear to increase the replication of viruses with other PI-resistance mutations.",
                  "highlightText": [
                    "A71I"
                  ]
                },
                {
                  "name": "PR85V",
                  "text": "I85V is a non-polymorphic PI-selected mutation. It has minimal, if any, effects on PI susceptibility.",
                  "highlightText": [
                    "I85V"
                  ]
                }
              ]
            },
            {
              "commentType": "Dosage",
              "comments": [
                {
                  "name": "DRVHigh",
                  "text": "There is evidence for high-level DRV resistance. If DRV is administered it should be used twice daily.",
                  "highlightText": [
                    "DRV",
                    "DRV/r"
                  ]
                }
              ]
            }
          ],
          "drugScores": [
            {
              "drugClass": {
                "name": "PI"
              },
              "drug": {
                "name": "ATV",
                "displayAbbr": "ATV/r"
              },
              "score": 345.0,
              "partialScores": [
                {
                  "mutations": [
                    {
                      "text": "L24F"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "V32I"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "V32I"
                    },
                    {
                      "text": "I47A"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "L33F"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "M46I"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "M46I"
                    },
                    {
                      "text": "V82A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "M46I"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "G48A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "I50L"
                    }
                  ],
                  "score": 60.0
                },
                {
                  "mutations": [
                    {
                      "text": "F53L"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "F53L"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "I54A"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "I54A"
                    },
                    {
                      "text": "V82A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "I54A"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "G73A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "G73A"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "T74P"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "V82A"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "V82A"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "N83D"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "I84A"
                    }
                  ],
                  "score": 60.0
                },
                {
                  "mutations": [
                    {
                      "text": "N88D"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 25.0
                }
              ]
            },
            {
              "drugClass": {
                "name": "PI"
              },
              "drug": {
                "name": "DRV",
                "displayAbbr": "DRV/r"
              },
              "score": 95.0,
              "partialScores": [
                {
                  "mutations": [
                    {
                      "text": "L10F"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "V11I"
                    },
                    {
                      "text": "V32I"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "V32I"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "V32I"
                    },
                    {
                      "text": "I47A"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "V32I"
                    },
                    {
                      "text": "L76V"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "L33F"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "I47A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "I50L"
                    }
                  ],
                  "score": -10.0
                },
                {
                  "mutations": [
                    {
                      "text": "T74P"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "L76V"
                    }
                  ],
                  "score": 20.0
                },
                {
                  "mutations": [
                    {
                      "text": "I84A"
                    }
                  ],
                  "score": 30.0
                }
              ]
            },
            {
              "drugClass": {
                "name": "PI"
              },
              "drug": {
                "name": "FPV",
                "displayAbbr": "FPV/r"
              },
              "score": 405.0,
              "partialScores": [
                {
                  "mutations": [
                    {
                      "text": "L10F"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "V11I"
                    },
                    {
                      "text": "V32I"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "L24F"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "V32I"
                    }
                  ],
                  "score": 30.0
                },
                {
                  "mutations": [
                    {
                      "text": "V32I"
                    },
                    {
                      "text": "I47A"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "V32I"
                    },
                    {
                      "text": "L76V"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "L33F"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "M46I"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "M46I"
                    },
                    {
                      "text": "L76V"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "M46I"
                    },
                    {
                      "text": "V82A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "M46I"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "I47A"
                    }
                  ],
                  "score": 60.0
                },
                {
                  "mutations": [
                    {
                      "text": "I50L"
                    }
                  ],
                  "score": -5.0
                },
                {
                  "mutations": [
                    {
                      "text": "F53L"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "I54A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "I54A"
                    },
                    {
                      "text": "V82A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "I54A"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "G73A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "G73A"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "T74P"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "L76V"
                    }
                  ],
                  "score": 60.0
                },
                {
                  "mutations": [
                    {
                      "text": "V82A"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "V82A"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "I84A"
                    }
                  ],
                  "score": 60.0
                },
                {
                  "mutations": [
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 20.0
                }
              ]
            },
            {
              "drugClass": {
                "name": "PI"
              },
              "drug": {
                "name": "IDV",
                "displayAbbr": "IDV/r"
              },
              "score": 360.0,
              "partialScores": [
                {
                  "mutations": [
                    {
                      "text": "L10F"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "V11I"
                    },
                    {
                      "text": "V32I"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "L24F"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "V32I"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "V32I"
                    },
                    {
                      "text": "I47A"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "V32I"
                    },
                    {
                      "text": "L76V"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "L33F"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "M46I"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "M46I"
                    },
                    {
                      "text": "L76V"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "M46I"
                    },
                    {
                      "text": "V82A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "M46I"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "I47A"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "G48A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "I50L"
                    }
                  ],
                  "score": -5.0
                },
                {
                  "mutations": [
                    {
                      "text": "F53L"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "I54A"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "I54A"
                    },
                    {
                      "text": "V82A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "I54A"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "G73A"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "G73A"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "T74P"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "L76V"
                    }
                  ],
                  "score": 30.0
                },
                {
                  "mutations": [
                    {
                      "text": "V82A"
                    }
                  ],
                  "score": 30.0
                },
                {
                  "mutations": [
                    {
                      "text": "V82A"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "N83D"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "I84A"
                    }
                  ],
                  "score": 60.0
                },
                {
                  "mutations": [
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 30.0
                }
              ]
            },
            {
              "drugClass": {
                "name": "PI"
              },
              "drug": {
                "name": "LPV",
                "displayAbbr": "LPV/r"
              },
              "score": 315.0,
              "partialScores": [
                {
                  "mutations": [
                    {
                      "text": "L10F"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "V11I"
                    },
                    {
                      "text": "V32I"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "L24F"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "V32I"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "V32I"
                    },
                    {
                      "text": "I47A"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "V32I"
                    },
                    {
                      "text": "L76V"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "L33F"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "M46I"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "M46I"
                    },
                    {
                      "text": "L76V"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "M46I"
                    },
                    {
                      "text": "V82A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "I47A"
                    }
                  ],
                  "score": 60.0
                },
                {
                  "mutations": [
                    {
                      "text": "G48A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "I50L"
                    }
                  ],
                  "score": -10.0
                },
                {
                  "mutations": [
                    {
                      "text": "I54A"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "I54A"
                    },
                    {
                      "text": "V82A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "I54A"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "G73A"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "T74P"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "L76V"
                    }
                  ],
                  "score": 30.0
                },
                {
                  "mutations": [
                    {
                      "text": "V82A"
                    }
                  ],
                  "score": 30.0
                },
                {
                  "mutations": [
                    {
                      "text": "V82A"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "I84A"
                    }
                  ],
                  "score": 60.0
                },
                {
                  "mutations": [
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 15.0
                }
              ]
            },
            {
              "drugClass": {
                "name": "PI"
              },
              "drug": {
                "name": "NFV",
                "displayAbbr": "NFV"
              },
              "score": 630.0,
              "partialScores": [
                {
                  "mutations": [
                    {
                      "text": "L10F"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "V11I"
                    },
                    {
                      "text": "V32I"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "L23I"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "L24F"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "D30N"
                    }
                  ],
                  "score": 60.0
                },
                {
                  "mutations": [
                    {
                      "text": "V32I"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "V32I"
                    },
                    {
                      "text": "I47A"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "V32I"
                    },
                    {
                      "text": "L76V"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "L33F"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "K43T"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "M46I"
                    }
                  ],
                  "score": 30.0
                },
                {
                  "mutations": [
                    {
                      "text": "M46I"
                    },
                    {
                      "text": "L76V"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "M46I"
                    },
                    {
                      "text": "V82A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "M46I"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "I47A"
                    }
                  ],
                  "score": 30.0
                },
                {
                  "mutations": [
                    {
                      "text": "G48A"
                    }
                  ],
                  "score": 30.0
                },
                {
                  "mutations": [
                    {
                      "text": "F53L"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "F53L"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "I54A"
                    }
                  ],
                  "score": 20.0
                },
                {
                  "mutations": [
                    {
                      "text": "I54A"
                    },
                    {
                      "text": "V82A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "I54A"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "Q58E"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "G73A"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "G73A"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "T74P"
                    }
                  ],
                  "score": 20.0
                },
                {
                  "mutations": [
                    {
                      "text": "L76V"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "V82A"
                    }
                  ],
                  "score": 30.0
                },
                {
                  "mutations": [
                    {
                      "text": "V82A"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "N83D"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "I84A"
                    }
                  ],
                  "score": 60.0
                },
                {
                  "mutations": [
                    {
                      "text": "N88D"
                    }
                  ],
                  "score": 60.0
                },
                {
                  "mutations": [
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 60.0
                }
              ]
            },
            {
              "drugClass": {
                "name": "PI"
              },
              "drug": {
                "name": "SQV",
                "displayAbbr": "SQV/r"
              },
              "score": 335.0,
              "partialScores": [
                {
                  "mutations": [
                    {
                      "text": "L24F"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "L33F"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "M46I"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "M46I"
                    },
                    {
                      "text": "V82A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "M46I"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "G48A"
                    }
                  ],
                  "score": 60.0
                },
                {
                  "mutations": [
                    {
                      "text": "I50L"
                    }
                  ],
                  "score": -5.0
                },
                {
                  "mutations": [
                    {
                      "text": "F53L"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "F53L"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "I54A"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "I54A"
                    },
                    {
                      "text": "V82A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "I54A"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "G73A"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "G73A"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "T74P"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "V82A"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "V82A"
                    },
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "N83D"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "I84A"
                    }
                  ],
                  "score": 60.0
                },
                {
                  "mutations": [
                    {
                      "text": "N88D"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "L90M"
                    }
                  ],
                  "score": 45.0
                }
              ]
            },
            {
              "drugClass": {
                "name": "PI"
              },
              "drug": {
                "name": "TPV",
                "displayAbbr": "TPV/r"
              },
              "score": 195.0,
              "partialScores": [
                {
                  "mutations": [
                    {
                      "text": "V32I"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "L33F"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "K43T"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "M46I"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "I47A"
                    }
                  ],
                  "score": 30.0
                },
                {
                  "mutations": [
                    {
                      "text": "I50L"
                    }
                  ],
                  "score": -5.0
                },
                {
                  "mutations": [
                    {
                      "text": "I54A"
                    }
                  ],
                  "score": 20.0
                },
                {
                  "mutations": [
                    {
                      "text": "Q58E"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "T74P"
                    }
                  ],
                  "score": 25.0
                },
                {
                  "mutations": [
                    {
                      "text": "L76V"
                    }
                  ],
                  "score": -5.0
                },
                {
                  "mutations": [
                    {
                      "text": "N83D"
                    }
                  ],
                  "score": 25.0
                },
                {
                  "mutations": [
                    {
                      "text": "I84A"
                    }
                  ],
                  "score": 60.0
                }
              ]
            }
          ]
        },
        {
          "algorithm": {
            "family": "HIVDB",
            "version": "8.9-1",
            "publishDate": "2019-10-25"
          },
          "gene": {
            "name": "RT",
            "drugClasses": [
              {
                "name": "NRTI",
                "fullName": "Nucleoside Reverse Transcriptase Inhibitor"
              },
              {
                "name": "NNRTI",
                "fullName": "Non-nucleoside Reverse Transcriptase Inhibitor"
              }
            ]
          },
          "levels": [
            {
              "drugClass": {
                "name": "NRTI"
              },
              "drug": {
                "name": "ABC",
                "displayAbbr": "ABC",
                "fullName": "abacavir"
              },
              "text": "High-Level Resistance"
            },
            {
              "drugClass": {
                "name": "NRTI"
              },
              "drug": {
                "name": "AZT",
                "displayAbbr": "AZT",
                "fullName": "zidovudine"
              },
              "text": "Intermediate Resistance"
            },
            {
              "drugClass": {
                "name": "NRTI"
              },
              "drug": {
                "name": "D4T",
                "displayAbbr": "D4T",
                "fullName": "stavudine"
              },
              "text": "High-Level Resistance"
            },
            {
              "drugClass": {
                "name": "NRTI"
              },
              "drug": {
                "name": "DDI",
                "displayAbbr": "DDI",
                "fullName": "didanosine"
              },
              "text": "High-Level Resistance"
            },
            {
              "drugClass": {
                "name": "NRTI"
              },
              "drug": {
                "name": "FTC",
                "displayAbbr": "FTC",
                "fullName": "emtricitabine"
              },
              "text": "Intermediate Resistance"
            },
            {
              "drugClass": {
                "name": "NRTI"
              },
              "drug": {
                "name": "LMV",
                "displayAbbr": "3TC",
                "fullName": "lamivudine"
              },
              "text": "Intermediate Resistance"
            },
            {
              "drugClass": {
                "name": "NRTI"
              },
              "drug": {
                "name": "TDF",
                "displayAbbr": "TDF",
                "fullName": "tenofovir"
              },
              "text": "High-Level Resistance"
            },
            {
              "drugClass": {
                "name": "NNRTI"
              },
              "drug": {
                "name": "DOR",
                "displayAbbr": "DOR",
                "fullName": "doravirine"
              },
              "text": "Low-Level Resistance"
            },
            {
              "drugClass": {
                "name": "NNRTI"
              },
              "drug": {
                "name": "EFV",
                "displayAbbr": "EFV",
                "fullName": "efavirenz"
              },
              "text": "Low-Level Resistance"
            },
            {
              "drugClass": {
                "name": "NNRTI"
              },
              "drug": {
                "name": "ETR",
                "displayAbbr": "ETR",
                "fullName": "etravirine"
              },
              "text": "Potential Low-Level Resistance"
            },
            {
              "drugClass": {
                "name": "NNRTI"
              },
              "drug": {
                "name": "NVP",
                "displayAbbr": "NVP",
                "fullName": "nevirapine"
              },
              "text": "Intermediate Resistance"
            },
            {
              "drugClass": {
                "name": "NNRTI"
              },
              "drug": {
                "name": "RPV",
                "displayAbbr": "RPV",
                "fullName": "rilpivirine"
              },
              "text": "Low-Level Resistance"
            }
          ],
          "mutationsByTypes": [
            {
              "mutationType": "NRTI",
              "mutations": [
                {
                  "text": "E40F",
                  "isUnsequenced": false
                },
                {
                  "text": "M41L",
                  "isUnsequenced": false
                },
                {
                  "text": "E44A",
                  "isUnsequenced": false
                },
                {
                  "text": "A62V",
                  "isUnsequenced": false
                },
                {
                  "text": "K65E",
                  "isUnsequenced": false
                },
                {
                  "text": "D67E",
                  "isUnsequenced": false
                },
                {
                  "text": "S68Deletion",
                  "isUnsequenced": false
                },
                {
                  "text": "T69D",
                  "isUnsequenced": false
                },
                {
                  "text": "K70E",
                  "isUnsequenced": false
                },
                {
                  "text": "L74I",
                  "isUnsequenced": false
                },
                {
                  "text": "V75A",
                  "isUnsequenced": false
                },
                {
                  "text": "F77L",
                  "isUnsequenced": false
                }
              ]
            },
            {
              "mutationType": "NNRTI",
              "mutations": [
                {
                  "text": "A98G",
                  "isUnsequenced": false
                }
              ]
            },
            {
              "mutationType": "Other",
              "mutations": [
                {
                  "text": "V90I",
                  "isUnsequenced": false
                }
              ]
            }
          ],
          "commentsByTypes": [
            {
              "commentType": "NRTI",
              "comments": [
                {
                  "name": "RT40F",
                  "text": "E40F is a non-polymorphic accessory mutation selected by AZT and d4T. It usually occurs in combination with M41L, L210W and T215Y. In this context it is associated with reduced susceptibility to each of the NRTIs.",
                  "highlightText": [
                    "E40F"
                  ]
                },
                {
                  "name": "RT41L",
                  "text": "M41L is a TAM that usually occurs with T215Y. In combination, M41L plus T215Y confer intermediate / high-level resistance to AZT and d4T and contribute to reduced ddI, ABC and TDF susceptibility.",
                  "highlightText": [
                    "M41L"
                  ]
                },
                {
                  "name": "RT44AD",
                  "text": "E44D is a relatively non-polymorphic accessory mutation and E44A is a nonpolymorphic accessory mutation. Each usually occurs with multiple TAMs.",
                  "highlightText": [
                    "E44A"
                  ]
                },
                {
                  "name": "RT62V",
                  "text": "A62V is an accessory mutation that often occurs in combination with the multi-NRTI resistance mutations K65R or Q151M. A62V is widespread in subtype A viruses in former Soviet Union countries but A62 is otherwise non-polymorphic.",
                  "highlightText": [
                    "A62V"
                  ]
                },
                {
                  "name": "RT65E",
                  "text": "K65R causes intermediate/high-level resistance to TDF, ddI, ABC and d4T and low/intermediate resistance to 3TC and FTC. K65R increases susceptibility to AZT. K65E is an extremely rare NRTI-selected mutation with markedly reduced replication fitness.",
                  "highlightText": [
                    "K65E"
                  ]
                },
                {
                  "name": "RT67GESTH",
                  "text": "D67N is a non-polymorphic TAM associated with low-level resistance to AZT and d4T. When present with other TAMs, it contributes reduced susceptibility to ABC, ddI, and TDF. D67G/E/S/T/H are non-polymorphic NRTI-selected mutations that also generally occur in viruses with multiple TAMs.",
                  "highlightText": [
                    "D67E"
                  ]
                },
                {
                  "name": "RT68-",
                  "text": "Amino acid deletions between codons 67 and 70 are rare and usually occur in combination with multiple TAMs, K65R, or the Q151M mutation complex. Deletions at position 67 are more often associated with multiple TAMs. Deletions at positions 69 and 70 are more often associated with K65R or the Q151M mutation complex. Deletions at codon 68 are extremely rare and less well characterized.",
                  "highlightText": [
                    "S68Deletion"
                  ]
                },
                {
                  "name": "RT69D",
                  "text": "T69D is a non-polymorphic mutation that reduces susceptibility to ddI and possibly d4T.",
                  "highlightText": [
                    "T69D"
                  ]
                },
                {
                  "name": "RT70EG",
                  "text": "K70E/G cause low-level resistance to TDF, ABC, DDI and possibly 3TC and FTC. K70E/G increase susceptibility to AZT.",
                  "highlightText": [
                    "K70E"
                  ]
                },
                {
                  "name": "RT74VI",
                  "text": "L74V/I cause high-level resistance to ddI and intermediate resistance to ABC.",
                  "highlightText": [
                    "L74I"
                  ]
                },
                {
                  "name": "RT75SA",
                  "text": "V75S/A are non-polymorphic mutations that appear to reduce susceptibility to d4T and ddI.",
                  "highlightText": [
                    "V75A"
                  ]
                },
                {
                  "name": "RT77L",
                  "text": "F77L usually occurs in combination with the multi-NRTI resistance mutation Q151M. When it occurs alone, its clinical significance is uncertain.",
                  "highlightText": [
                    "F77L"
                  ]
                }
              ]
            },
            {
              "commentType": "NNRTI",
              "comments": [
                {
                  "name": "RT98G",
                  "text": "A98G is a non-polymorphic accessory mutation associated with low-level reduced susceptibility to each of the NNRTIs.",
                  "highlightText": [
                    "A98G"
                  ]
                }
              ]
            },
            {
              "commentType": "Other",
              "comments": [
                {
                  "name": "RT90I",
                  "text": "V90I is a polymorphic accessory mutation weakly selected by each of the NNRTIs. It has a weight of 1.0 in the Tibotec ETR genotypic susceptibility score but is associated with minimal, if any, detectable reduction in NNRTI susceptibility.",
                  "highlightText": [
                    "V90I"
                  ]
                }
              ]
            }
          ],
          "drugScores": [
            {
              "drugClass": {
                "name": "NRTI"
              },
              "drug": {
                "name": "ABC",
                "displayAbbr": "ABC"
              },
              "score": 90.0,
              "partialScores": [
                {
                  "mutations": [
                    {
                      "text": "M41L"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "A62V"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "K65E"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "D67E"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "S68Deletion"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "K70E"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "L74I"
                    }
                  ],
                  "score": 30.0
                },
                {
                  "mutations": [
                    {
                      "text": "F77L"
                    }
                  ],
                  "score": 5.0
                }
              ]
            },
            {
              "drugClass": {
                "name": "NRTI"
              },
              "drug": {
                "name": "AZT",
                "displayAbbr": "AZT"
              },
              "score": 30.0,
              "partialScores": [
                {
                  "mutations": [
                    {
                      "text": "M41L"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "A62V"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "D67E"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "K70E"
                    }
                  ],
                  "score": -10.0
                },
                {
                  "mutations": [
                    {
                      "text": "F77L"
                    }
                  ],
                  "score": 10.0
                }
              ]
            },
            {
              "drugClass": {
                "name": "NRTI"
              },
              "drug": {
                "name": "D4T",
                "displayAbbr": "D4T"
              },
              "score": 135.0,
              "partialScores": [
                {
                  "mutations": [
                    {
                      "text": "M41L"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "A62V"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "K65E"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "D67E"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "S68Deletion"
                    }
                  ],
                  "score": 30.0
                },
                {
                  "mutations": [
                    {
                      "text": "T69D"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "K70E"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "V75A"
                    }
                  ],
                  "score": 30.0
                },
                {
                  "mutations": [
                    {
                      "text": "F77L"
                    }
                  ],
                  "score": 10.0
                }
              ]
            },
            {
              "drugClass": {
                "name": "NRTI"
              },
              "drug": {
                "name": "DDI",
                "displayAbbr": "DDI"
              },
              "score": 190.0,
              "partialScores": [
                {
                  "mutations": [
                    {
                      "text": "M41L"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "A62V"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "K65E"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "D67E"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "S68Deletion"
                    }
                  ],
                  "score": 30.0
                },
                {
                  "mutations": [
                    {
                      "text": "T69D"
                    }
                  ],
                  "score": 30.0
                },
                {
                  "mutations": [
                    {
                      "text": "K70E"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "L74I"
                    }
                  ],
                  "score": 60.0
                },
                {
                  "mutations": [
                    {
                      "text": "V75A"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "F77L"
                    }
                  ],
                  "score": 10.0
                }
              ]
            },
            {
              "drugClass": {
                "name": "NRTI"
              },
              "drug": {
                "name": "FTC",
                "displayAbbr": "FTC"
              },
              "score": 35.0,
              "partialScores": [
                {
                  "mutations": [
                    {
                      "text": "A62V"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "S68Deletion"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "K70E"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "F77L"
                    }
                  ],
                  "score": 5.0
                }
              ]
            },
            {
              "drugClass": {
                "name": "NRTI"
              },
              "drug": {
                "name": "LMV",
                "displayAbbr": "3TC"
              },
              "score": 35.0,
              "partialScores": [
                {
                  "mutations": [
                    {
                      "text": "A62V"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "S68Deletion"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "K70E"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "F77L"
                    }
                  ],
                  "score": 5.0
                }
              ]
            },
            {
              "drugClass": {
                "name": "NRTI"
              },
              "drug": {
                "name": "TDF",
                "displayAbbr": "TDF"
              },
              "score": 65.0,
              "partialScores": [
                {
                  "mutations": [
                    {
                      "text": "M41L"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "A62V"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "K65E"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "D67E"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "S68Deletion"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "K70E"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "L74I"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "F77L"
                    }
                  ],
                  "score": 5.0
                }
              ]
            },
            {
              "drugClass": {
                "name": "NNRTI"
              },
              "drug": {
                "name": "DOR",
                "displayAbbr": "DOR"
              },
              "score": 15.0,
              "partialScores": [
                {
                  "mutations": [
                    {
                      "text": "A98G"
                    }
                  ],
                  "score": 15.0
                }
              ]
            },
            {
              "drugClass": {
                "name": "NNRTI"
              },
              "drug": {
                "name": "EFV",
                "displayAbbr": "EFV"
              },
              "score": 15.0,
              "partialScores": [
                {
                  "mutations": [
                    {
                      "text": "A98G"
                    }
                  ],
                  "score": 15.0
                }
              ]
            },
            {
              "drugClass": {
                "name": "NNRTI"
              },
              "drug": {
                "name": "ETR",
                "displayAbbr": "ETR"
              },
              "score": 10.0,
              "partialScores": [
                {
                  "mutations": [
                    {
                      "text": "A98G"
                    }
                  ],
                  "score": 10.0
                }
              ]
            },
            {
              "drugClass": {
                "name": "NNRTI"
              },
              "drug": {
                "name": "NVP",
                "displayAbbr": "NVP"
              },
              "score": 30.0,
              "partialScores": [
                {
                  "mutations": [
                    {
                      "text": "A98G"
                    }
                  ],
                  "score": 30.0
                }
              ]
            },
            {
              "drugClass": {
                "name": "NNRTI"
              },
              "drug": {
                "name": "RPV",
                "displayAbbr": "RPV"
              },
              "score": 15.0,
              "partialScores": [
                {
                  "mutations": [
                    {
                      "text": "A98G"
                    }
                  ],
                  "score": 15.0
                }
              ]
            }
          ]
        },
        {
          "algorithm": {
            "family": "HIVDB",
            "version": "8.9-1",
            "publishDate": "2019-10-25"
          },
          "gene": {
            "name": "IN",
            "drugClasses": [
              {
                "name": "INSTI",
                "fullName": "Integrase Strand Transfer Inhibitor"
              }
            ]
          },
          "levels": [
            {
              "drugClass": {
                "name": "INSTI"
              },
              "drug": {
                "name": "BIC",
                "displayAbbr": "BIC",
                "fullName": "bictegravir"
              },
              "text": "High-Level Resistance"
            },
            {
              "drugClass": {
                "name": "INSTI"
              },
              "drug": {
                "name": "DTG",
                "displayAbbr": "DTG",
                "fullName": "dolutegravir"
              },
              "text": "High-Level Resistance"
            },
            {
              "drugClass": {
                "name": "INSTI"
              },
              "drug": {
                "name": "EVG",
                "displayAbbr": "EVG",
                "fullName": "elvitegravir"
              },
              "text": "High-Level Resistance"
            },
            {
              "drugClass": {
                "name": "INSTI"
              },
              "drug": {
                "name": "RAL",
                "displayAbbr": "RAL",
                "fullName": "raltegravir"
              },
              "text": "High-Level Resistance"
            }
          ],
          "mutationsByTypes": [
            {
              "mutationType": "Major",
              "mutations": [
                {
                  "text": "T66A",
                  "isUnsequenced": false
                },
                {
                  "text": "E92G",
                  "isUnsequenced": false
                },
                {
                  "text": "G118R",
                  "isUnsequenced": false
                },
                {
                  "text": "F121Y",
                  "isUnsequenced": false
                },
                {
                  "text": "E138A",
                  "isUnsequenced": false
                },
                {
                  "text": "G140A",
                  "isUnsequenced": false
                },
                {
                  "text": "Y143A",
                  "isUnsequenced": false
                },
                {
                  "text": "P145S",
                  "isUnsequenced": false
                },
                {
                  "text": "Q146P",
                  "isUnsequenced": false
                },
                {
                  "text": "S147G",
                  "isUnsequenced": false
                },
                {
                  "text": "Q148H",
                  "isUnsequenced": false
                },
                {
                  "text": "N155H",
                  "isUnsequenced": false
                },
                {
                  "text": "R263K",
                  "isUnsequenced": false
                }
              ]
            },
            {
              "mutationType": "Accessory",
              "mutations": [
                {
                  "text": "H51Y",
                  "isUnsequenced": false
                },
                {
                  "text": "Q95K",
                  "isUnsequenced": false
                },
                {
                  "text": "T97A",
                  "isUnsequenced": false
                },
                {
                  "text": "A128T",
                  "isUnsequenced": false
                },
                {
                  "text": "V151A",
                  "isUnsequenced": false
                },
                {
                  "text": "S153F",
                  "isUnsequenced": false
                },
                {
                  "text": "E157Q",
                  "isUnsequenced": false
                },
                {
                  "text": "G163K",
                  "isUnsequenced": false
                },
                {
                  "text": "S230R",
                  "isUnsequenced": false
                }
              ]
            },
            {
              "mutationType": "Other",
              "mutations": [
                {
                  "text": "L74I",
                  "isUnsequenced": false
                },
                {
                  "text": "H114Y",
                  "isUnsequenced": false
                }
              ]
            }
          ],
          "commentsByTypes": [
            {
              "commentType": "Major",
              "comments": [
                {
                  "name": "IN66A",
                  "text": "T66A is a non-polymorphic mutation selected in patients receiving EVG and RAL, usually in combination with other INSTI-resistance mutations. It causes a moderate reduction in EVG susceptibility but does not appear to reduce RAL, DTG, or BIC susceptibility.",
                  "highlightText": [
                    "T66A"
                  ]
                },
                {
                  "name": "IN92G",
                  "text": "E92G is a rare non-polymorphic mutation that has been selected in patients receiving EVG. It moderately reduces EVG susceptibility but does not reduce susceptibility to RAL, DTG, or BIC.",
                  "highlightText": [
                    "E92G"
                  ]
                },
                {
                  "name": "IN118R",
                  "text": "G118R is a rare non-polymorphic mutation selected in patients receiving RAL and DTG and in vitro by DTG. It causes a variable reduction in susceptibility to each of the INSTIs of about 5-fold.",
                  "highlightText": [
                    "G118R"
                  ]
                },
                {
                  "name": "IN121Y",
                  "text": "F121Y is a non-polymorphic mutation selected in vitro by RAL and EVG. It has been reported rarely in patients receiving RAL. It causes intermediate to high-level reductions in RAL and EVG susceptibility but does not appear to reduce DTG or BIC susceptibility.",
                  "highlightText": [
                    "F121Y"
                  ]
                },
                {
                  "name": "IN138KAT",
                  "text": "E138K/A are non-polymorphic mutations selected in patients receiving RAL, EVG, and DTG. They usually occur in combination with Q148 mutations. Alone they do not reduce INSTI susceptibility. However, when they occur in combination with Q148 mutations, they are associated with high-level resistance to RAL and EVG and intermediate reductions in DTG and BIC susceptibility. E138T is an uncommon nonpolymorphic INSTI-selected mutation that appears to have an effect similar to E138K/A.",
                  "highlightText": [
                    "E138A"
                  ]
                },
                {
                  "name": "IN140SAC",
                  "text": "G140S/A/C are non-polymorphic mutations that usually occur with Q148 mutations. Alone, they have minimal effects on INSTI susceptibility. However, in combination with Q148 mutations they are associated with high-level resistance to RAL and EVG and intermediate reductions in DTG and BIC susceptibility.",
                  "highlightText": [
                    "G140A"
                  ]
                },
                {
                  "name": "IN143KGSA",
                  "text": "Y143K/G/S/A are rare mutations that cause intermediate reductions in RAL susceptibility. When they occur in combination with other accessory mutations, they may also cause low-level reductions in EVG susceptibility.",
                  "highlightText": [
                    "Y143A"
                  ]
                },
                {
                  "name": "IN145S",
                  "text": "P145S is a rare non-polymorphic mutation selected in vitro by EVG and rarely in patients receiving EVG. It causes high-level resistance to EVG but not to RAL or DTG.",
                  "highlightText": [
                    "P145S"
                  ]
                },
                {
                  "name": "IN146P",
                  "text": "Q146P is a rare non-polymorphic mutation selected in vitro by EVG which causes low-to-intermediate reductions in EVG susceptibility.",
                  "highlightText": [
                    "Q146P"
                  ]
                },
                {
                  "name": "IN147G",
                  "text": "S147G is a non-polymorphic mutation selected primarily in patients receiving EVG and less commonly in patients receiving RAL and DTG. It moderately reduces EVG susceptibility. It does not reduce RAL, DTG, or BIC susceptibility.",
                  "highlightText": [
                    "S147G"
                  ]
                },
                {
                  "name": "IN148HKR",
                  "text": "Q148H/K/R are non-polymorphic mutations selected by RAL, EVG, and rarely DTG. Q148H/R/K are associated with high-level reductions in RAL and EVG susceptibility particularly when they occur In combination with E138 or G140 mutations. Alone, Q148H/K/R have minimal effects on DTG and BIC susceptibility. But in combination with E138 and G140 mutations they cause moderate and occasionally high-level reductions in DTG and BIC susceptibility.",
                  "highlightText": [
                    "Q148H"
                  ]
                },
                {
                  "name": "IN155H",
                  "text": "N155H is a non-polymorphic mutation selected in patients receiving RAL, EVG, and rarely DTG. It is associated with high-level reductions in RAL and EVG susceptibility. It causes low-level reductions in DTG susceptibility.",
                  "highlightText": [
                    "N155H"
                  ]
                },
                {
                  "name": "IN263K",
                  "text": "R263K is selected in vitro by EVG, DTG, and BIC, and in patients receiving DTG. It reduces DTG and BIC susceptibility about 2-fold and EVG susceptibility somewhat more.",
                  "highlightText": [
                    "R263K"
                  ]
                }
              ]
            },
            {
              "commentType": "Accessory",
              "comments": [
                {
                  "name": "IN51Y",
                  "text": "H51Y is a rare non-polymorphic accessory mutation selected in patients receiving RAL and EVG and in vitro by DTG. H51Y minimally reduces EVG susceptibility (~2 to 3-fold). It does not reduce RAL or DTG susceptibility.",
                  "highlightText": [
                    "H51Y"
                  ]
                },
                {
                  "name": "IN95K",
                  "text": "Q95K is a non-polymorphic INSTI-selected mutation. Alone, it has little if any effect on INSTI susceptibility.",
                  "highlightText": [
                    "Q95K"
                  ]
                },
                {
                  "name": "IN97A",
                  "text": "T97A is a polymorphic INSTI-selected mutation that, depending on subtype, occurs in 1% to 5% of viruses from untreated persons. Alone, it has minimal effects on INSTI susceptibility but in combination with other major resistance mutations, it synergistically reduces susceptibility to EVG, RAL, DTG, and possibly BIC.",
                  "highlightText": [
                    "T97A"
                  ]
                },
                {
                  "name": "IN128T",
                  "text": "A128T is a relatively nonpolymorphic possible INSTI-selected mutation, which does not appear to reduce INSTI susceptibility",
                  "highlightText": [
                    "A128T"
                  ]
                },
                {
                  "name": "IN151A",
                  "text": "V151A is an extremely rare non-polymorphic mutation associated with minimally reduced susceptibility to RAL and EVG.",
                  "highlightText": [
                    "V151A"
                  ]
                },
                {
                  "name": "IN153YF",
                  "text": "S153Y/F are rare non-polymorphic mutations selected in vitro by EVG, DTG, and BIC. S153Y/F reduce RAL, DTG, and possibly BIC susceptibility about 2-fold and EVG susceptibility about 4-fold.",
                  "highlightText": [
                    "S153F"
                  ]
                },
                {
                  "name": "IN157Q",
                  "text": "E157Q is a polymorphic mutation selected in patients receiving RAL and EVG. It appears to have little effect on INSTI susceptibility.",
                  "highlightText": [
                    "E157Q"
                  ]
                },
                {
                  "name": "IN163RK",
                  "text": "G163R/K are polymorphic in subtype F viruses from ARV-naive patients but are otherwise non-polymorphic. They are common INSTI-selected mutations. Alone, they have little, if any, effect on INSTI susceptibility.",
                  "highlightText": [
                    "G163K"
                  ]
                },
                {
                  "name": "IN230R",
                  "text": "S230R is a non-polymorphic mutation selected by RAL, EVG, and DTG. It causes low-level reductions in DTG susceptibility.",
                  "highlightText": [
                    "S230R"
                  ]
                }
              ]
            },
            {
              "commentType": "Other",
              "comments": [
                {
                  "name": "IN74MIF",
                  "text": "L74M/I are polymorphic accessory mutations commonly selected by each of the INSTIs. In ARV-naive patients, L74M occurs in 0.5% to 10% of patients and L74I occurs in 3% to 20% of patients depending on subtype. Alone, L74M/I have minimal, if any, effect on INSTI susceptibility. However, they contribute reduced susceptibility to each of the INSTIs when they occur with major INSTI-resistance mutations. L74F is a rare nonpolymorphic mutation which also contributes reduced susceptibility when it occurs with other INSTI-resistance mutations.",
                  "highlightText": [
                    "L74I"
                  ]
                }
              ]
            },
            {
              "commentType": "Dosage",
              "comments": [
                {
                  "name": "DTGHigh",
                  "text": "There is evidence for high-level DTG resistance. If DTG is used, it should be administered twice daily.",
                  "highlightText": [
                    "DTG"
                  ]
                }
              ]
            }
          ],
          "drugScores": [
            {
              "drugClass": {
                "name": "INSTI"
              },
              "drug": {
                "name": "BIC",
                "displayAbbr": "BIC"
              },
              "score": 355.0,
              "partialScores": [
                {
                  "mutations": [
                    {
                      "text": "H51Y"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "H51Y"
                    },
                    {
                      "text": "R263K"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "L74I"
                    },
                    {
                      "text": "G118R"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "L74I"
                    },
                    {
                      "text": "Y143A"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "L74I"
                    },
                    {
                      "text": "Q148H"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "T97A"
                    },
                    {
                      "text": "G118R"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "T97A"
                    },
                    {
                      "text": "Q148H"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "G118R"
                    }
                  ],
                  "score": 30.0
                },
                {
                  "mutations": [
                    {
                      "text": "G118R"
                    },
                    {
                      "text": "E138A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "F121Y"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "E138A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "E138A"
                    },
                    {
                      "text": "G140A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "E138A"
                    },
                    {
                      "text": "Q148H"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "G140A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "G140A"
                    },
                    {
                      "text": "Q148H"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "Y143A"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "Y143A"
                    },
                    {
                      "text": "S230R"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "S147G"
                    },
                    {
                      "text": "Q148H"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "S147G"
                    },
                    {
                      "text": "N155H"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "Q148H"
                    }
                  ],
                  "score": 25.0
                },
                {
                  "mutations": [
                    {
                      "text": "Q148H"
                    },
                    {
                      "text": "N155H"
                    }
                  ],
                  "score": 20.0
                },
                {
                  "mutations": [
                    {
                      "text": "Q148H"
                    },
                    {
                      "text": "G163K"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "S153F"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "N155H"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "N155H"
                    },
                    {
                      "text": "R263K"
                    }
                  ],
                  "score": 20.0
                },
                {
                  "mutations": [
                    {
                      "text": "E157Q"
                    },
                    {
                      "text": "R263K"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "S230R"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "R263K"
                    }
                  ],
                  "score": 30.0
                }
              ]
            },
            {
              "drugClass": {
                "name": "INSTI"
              },
              "drug": {
                "name": "DTG",
                "displayAbbr": "DTG"
              },
              "score": 365.0,
              "partialScores": [
                {
                  "mutations": [
                    {
                      "text": "H51Y"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "H51Y"
                    },
                    {
                      "text": "R263K"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "L74I"
                    },
                    {
                      "text": "G118R"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "L74I"
                    },
                    {
                      "text": "Y143A"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "L74I"
                    },
                    {
                      "text": "Q148H"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "T97A"
                    },
                    {
                      "text": "G118R"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "T97A"
                    },
                    {
                      "text": "Q148H"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "G118R"
                    }
                  ],
                  "score": 30.0
                },
                {
                  "mutations": [
                    {
                      "text": "G118R"
                    },
                    {
                      "text": "E138A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "F121Y"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "E138A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "E138A"
                    },
                    {
                      "text": "G140A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "E138A"
                    },
                    {
                      "text": "Q148H"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "G140A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "G140A"
                    },
                    {
                      "text": "Q148H"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "Y143A"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "Y143A"
                    },
                    {
                      "text": "S230R"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "S147G"
                    },
                    {
                      "text": "Q148H"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "S147G"
                    },
                    {
                      "text": "N155H"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "Q148H"
                    }
                  ],
                  "score": 25.0
                },
                {
                  "mutations": [
                    {
                      "text": "Q148H"
                    },
                    {
                      "text": "N155H"
                    }
                  ],
                  "score": 20.0
                },
                {
                  "mutations": [
                    {
                      "text": "Q148H"
                    },
                    {
                      "text": "G163K"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "S153F"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "N155H"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "N155H"
                    },
                    {
                      "text": "R263K"
                    }
                  ],
                  "score": 20.0
                },
                {
                  "mutations": [
                    {
                      "text": "E157Q"
                    },
                    {
                      "text": "R263K"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "S230R"
                    }
                  ],
                  "score": 20.0
                },
                {
                  "mutations": [
                    {
                      "text": "R263K"
                    }
                  ],
                  "score": 30.0
                }
              ]
            },
            {
              "drugClass": {
                "name": "INSTI"
              },
              "drug": {
                "name": "EVG",
                "displayAbbr": "EVG"
              },
              "score": 790.0,
              "partialScores": [
                {
                  "mutations": [
                    {
                      "text": "H51Y"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "H51Y"
                    },
                    {
                      "text": "R263K"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "T66A"
                    }
                  ],
                  "score": 60.0
                },
                {
                  "mutations": [
                    {
                      "text": "L74I"
                    },
                    {
                      "text": "G118R"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "L74I"
                    },
                    {
                      "text": "Y143A"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "L74I"
                    },
                    {
                      "text": "Q148H"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "E92G"
                    }
                  ],
                  "score": 30.0
                },
                {
                  "mutations": [
                    {
                      "text": "Q95K"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "T97A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "T97A"
                    },
                    {
                      "text": "G118R"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "T97A"
                    },
                    {
                      "text": "Y143A"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "G118R"
                    }
                  ],
                  "score": 30.0
                },
                {
                  "mutations": [
                    {
                      "text": "G118R"
                    },
                    {
                      "text": "E138A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "F121Y"
                    }
                  ],
                  "score": 60.0
                },
                {
                  "mutations": [
                    {
                      "text": "E138A"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "E138A"
                    },
                    {
                      "text": "G140A"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "G140A"
                    }
                  ],
                  "score": 30.0
                },
                {
                  "mutations": [
                    {
                      "text": "Y143A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "Y143A"
                    },
                    {
                      "text": "S230R"
                    }
                  ],
                  "score": 5.0
                },
                {
                  "mutations": [
                    {
                      "text": "P145S"
                    }
                  ],
                  "score": 60.0
                },
                {
                  "mutations": [
                    {
                      "text": "Q146P"
                    }
                  ],
                  "score": 60.0
                },
                {
                  "mutations": [
                    {
                      "text": "S147G"
                    }
                  ],
                  "score": 60.0
                },
                {
                  "mutations": [
                    {
                      "text": "S147G"
                    },
                    {
                      "text": "N155H"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "Q148H"
                    }
                  ],
                  "score": 60.0
                },
                {
                  "mutations": [
                    {
                      "text": "V151A"
                    }
                  ],
                  "score": 30.0
                },
                {
                  "mutations": [
                    {
                      "text": "S153F"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "N155H"
                    }
                  ],
                  "score": 60.0
                },
                {
                  "mutations": [
                    {
                      "text": "E157Q"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "G163K"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "S230R"
                    }
                  ],
                  "score": 20.0
                },
                {
                  "mutations": [
                    {
                      "text": "R263K"
                    }
                  ],
                  "score": 30.0
                }
              ]
            },
            {
              "drugClass": {
                "name": "INSTI"
              },
              "drug": {
                "name": "RAL",
                "displayAbbr": "RAL"
              },
              "score": 525.0,
              "partialScores": [
                {
                  "mutations": [
                    {
                      "text": "H51Y"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "T66A"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "L74I"
                    },
                    {
                      "text": "G118R"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "L74I"
                    },
                    {
                      "text": "Q148H"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "E92G"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "Q95K"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "T97A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "T97A"
                    },
                    {
                      "text": "G118R"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "G118R"
                    }
                  ],
                  "score": 30.0
                },
                {
                  "mutations": [
                    {
                      "text": "G118R"
                    },
                    {
                      "text": "E138A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "F121Y"
                    }
                  ],
                  "score": 60.0
                },
                {
                  "mutations": [
                    {
                      "text": "E138A"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "E138A"
                    },
                    {
                      "text": "G140A"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "G140A"
                    }
                  ],
                  "score": 30.0
                },
                {
                  "mutations": [
                    {
                      "text": "Y143A"
                    }
                  ],
                  "score": 60.0
                },
                {
                  "mutations": [
                    {
                      "text": "Q148H"
                    }
                  ],
                  "score": 60.0
                },
                {
                  "mutations": [
                    {
                      "text": "V151A"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "N155H"
                    }
                  ],
                  "score": 60.0
                },
                {
                  "mutations": [
                    {
                      "text": "E157Q"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "G163K"
                    }
                  ],
                  "score": 15.0
                },
                {
                  "mutations": [
                    {
                      "text": "S230R"
                    }
                  ],
                  "score": 20.0
                },
                {
                  "mutations": [
                    {
                      "text": "R263K"
                    }
                  ],
                  "score": 25.0
                }
              ]
            }
          ]
        }
      ]
    }
  }
}