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
              "text": "Low-Level Resistance"
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
                  "text": "M46I",
                  "isUnsequenced": false
                },
                {
                  "text": "I47A",
                  "isUnsequenced": false
                },
                {
                  "text": "I54A",
                  "isUnsequenced": false
                },
                {
                  "text": "V82A",
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
                  "text": "N88D",
                  "isUnsequenced": false
                }
              ]
            },
            {
              "mutationType": "Other",
              "mutations": [
                {
                  "text": "V11L",
                  "isUnsequenced": false
                },
                {
                  "text": "I13V",
                  "isUnsequenced": false
                },
                {
                  "text": "E35G",
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
                  "name": "PR54ATS",
                  "text": "I54A/T/S are non-polymorphic PI-selected mutations that occur almost exclusively in viruses with multiple PI-resistance mutations. I54A/T/S are associated with reduced susceptibility to each of the PIs except DRV.",
                  "highlightText": [
                    "I54A"
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
                    "V11L"
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
                  "name": "DRVLow",
                  "text": "There is evidence for low-level DRV resistance. If DRV is administered it should be used twice daily.",
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
              "score": 175.0,
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
                  "score": 10.0
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
              "score": 20.0,
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
              "score": 225.0,
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
              "score": 205.0,
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
              "score": 180.0,
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
                      "text": "I47A"
                    }
                  ],
                  "score": 60.0
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
              "score": 445.0,
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
                  "score": 30.0
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
              "score": 200.0,
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
              "score": 80.0,
              "partialScores": [
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
              "text": "High-Level Resistance"
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
              "text": "Susceptible"
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
              "text": "Susceptible"
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
              "text": "Susceptible"
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
              "text": "Susceptible"
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
              "text": "Susceptible"
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
                  "text": "T69Insertion",
                  "isUnsequenced": false
                }
              ]
            },
            {
              "mutationType": "NNRTI",
              "mutations": []
            },
            {
              "mutationType": "Other",
              "mutations": []
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
                  "name": "RT69_",
                  "text": "Amino acid insertions between codons 67 and 70 are by convention assigned to codon 69. Together with TAMs, they are associated with high-level resistance to AZT, d4T, ddI, ABC and TDF and intermediate to 3TC and FTC.",
                  "highlightText": [
                    "T69Insertion"
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
              "score": 100.0,
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
                      "text": "T69Insertion"
                    }
                  ],
                  "score": 60.0
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
              "score": 90.0,
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
                      "text": "T69Insertion"
                    }
                  ],
                  "score": 60.0
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
              "score": 130.0,
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
                      "text": "T69Insertion"
                    }
                  ],
                  "score": 60.0
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
              "score": 120.0,
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
                      "text": "T69Insertion"
                    }
                  ],
                  "score": 60.0
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
              "score": 50.0,
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
                      "text": "T69Insertion"
                    }
                  ],
                  "score": 30.0
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
              "score": 50.0,
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
                      "text": "T69Insertion"
                    }
                  ],
                  "score": 30.0
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
              "score": 100.0,
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
                      "text": "T69Insertion"
                    }
                  ],
                  "score": 60.0
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
              "score": 0.0,
              "partialScores": []
            },
            {
              "drugClass": {
                "name": "NNRTI"
              },
              "drug": {
                "name": "EFV",
                "displayAbbr": "EFV"
              },
              "score": 0.0,
              "partialScores": []
            },
            {
              "drugClass": {
                "name": "NNRTI"
              },
              "drug": {
                "name": "ETR",
                "displayAbbr": "ETR"
              },
              "score": 0.0,
              "partialScores": []
            },
            {
              "drugClass": {
                "name": "NNRTI"
              },
              "drug": {
                "name": "NVP",
                "displayAbbr": "NVP"
              },
              "score": 0.0,
              "partialScores": []
            },
            {
              "drugClass": {
                "name": "NNRTI"
              },
              "drug": {
                "name": "RPV",
                "displayAbbr": "RPV"
              },
              "score": 0.0,
              "partialScores": []
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
              "text": "Intermediate Resistance"
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
              "text": "Intermediate Resistance"
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
                  "text": "G118R",
                  "isUnsequenced": false
                },
                {
                  "text": "G140A",
                  "isUnsequenced": false
                },
                {
                  "text": "Y143C",
                  "isUnsequenced": false
                },
                {
                  "text": "P145S",
                  "isUnsequenced": false
                },
                {
                  "text": "Q146P",
                  "isUnsequenced": false
                }
              ]
            },
            {
              "mutationType": "Accessory",
              "mutations": [
                {
                  "text": "T97A",
                  "isUnsequenced": false
                },
                {
                  "text": "A128T",
                  "isUnsequenced": false
                }
              ]
            },
            {
              "mutationType": "Other",
              "mutations": [
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
                  "name": "IN118R",
                  "text": "G118R is a rare non-polymorphic mutation selected in patients receiving RAL and DTG and in vitro by DTG. It causes a variable reduction in susceptibility to each of the INSTIs of about 5-fold.",
                  "highlightText": [
                    "G118R"
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
                  "name": "IN143CR",
                  "text": "Y143C/R are non-polymorphic mutations associated with high-level RAL resistance. Alone, they have minimal effects on EVG susceptibility. However, they are associated with intermediate reductions in EVG susceptibility when they occur in combination with one or more accessory INSTI-resistance mutations. Y143 mutations do not reduce DTG or BIC susceptibility.",
                  "highlightText": [
                    "Y143C"
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
                }
              ]
            },
            {
              "commentType": "Accessory",
              "comments": [
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
                }
              ]
            },
            {
              "commentType": "Dosage",
              "comments": [
                {
                  "name": "DTGIntermediate",
                  "text": "There is evidence for intermediate DTG resistance. If DTG is used, it should be administered twice daily.",
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
              "score": 55.0,
              "partialScores": [
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
                      "text": "G140A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "Y143C"
                    }
                  ],
                  "score": 5.0
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
              "score": 55.0,
              "partialScores": [
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
                      "text": "G140A"
                    }
                  ],
                  "score": 10.0
                },
                {
                  "mutations": [
                    {
                      "text": "Y143C"
                    }
                  ],
                  "score": 5.0
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
              "score": 215.0,
              "partialScores": [
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
                      "text": "Y143C"
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
                      "text": "G140A"
                    }
                  ],
                  "score": 30.0
                },
                {
                  "mutations": [
                    {
                      "text": "Y143C"
                    }
                  ],
                  "score": 10.0
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
              "score": 140.0,
              "partialScores": [
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
                      "text": "G140A"
                    }
                  ],
                  "score": 30.0
                },
                {
                  "mutations": [
                    {
                      "text": "Y143C"
                    }
                  ],
                  "score": 60.0
                }
              ]
            }
          ]
        }
      ]
    }
  }
}