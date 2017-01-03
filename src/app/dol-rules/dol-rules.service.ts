import { Injectable } from '@angular/core';

@Injectable()
export class DOLRulesDataService {

    constructor() { }
    getData(): Object {
        return {
            'pending': {
                'qualified': {
                    'solicited': {
                        'fi': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'sign': 'need'
                        },
                        'no fi': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'withheld',
                            'sign': 'no need'
                        },
                        'unknown': {
                            'scenario': 'valid',
                            'order': 'nigo',
                            'commission': 'NA',
                            'sign': 'NA'
                        }
                    },
                    'unsolicited': {
                        'fi': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        },
                        'no fi': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        },
                        'unknown': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        }
                    },
                    'unknown': {
                        'fi': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        },
                        'no fi': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        },
                        'unknown': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        }
                    }
                },
                'non qualified': {
                    'solicited': {
                        'fi': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'sign': 'no need'

                        },
                        'no fi': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'sign': 'no need'

                        },
                        'unknown': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'sign': 'no need'

                        }
                    },
                    'unsolicited': {
                        'fi': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        },
                        'no fi': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        },
                        'unknown': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        }
                    },
                    'unknown': {
                        'fi': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        },
                        'no fi': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        },
                        'unknown': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        }
                    }
                },
                'unknown': {
                    'solicited': {
                        'fi': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'sign': 'no need'

                        },
                        'no fi': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'sign': 'no need'

                        },
                        'unknown': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'sign': 'no need'

                        }
                    },
                    'unsolicited': {
                        'fi': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        },
                        'no fi': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        },
                        'unknown': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        }
                    },
                    'unknown': {
                        'fi': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        },
                        'no fi': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        },
                        'unknown': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        }
                    }
                }
            },
            'active': {
                'qualified': {
                    'solicited': {
                        'fi': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'sign': 'need'
                        },
                        'no fi': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'withheld',
                            'sign': 'no need'
                        },
                        'unknown': {
                            'scenario': 'valid',
                            'order': 'nigo',
                            'commission': 'NA',
                            'sign': 'NA'
                        }
                    },
                    'unsolicited': {
                        'fi': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        },
                        'no fi': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        },
                        'unknown': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        }
                    },
                    'unknown': {
                        'fi': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        },
                        'no fi': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        },
                        'unknown': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        }
                    }
                },
                'non qualified': {
                    'solicited': {
                        'fi': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'sign': 'no need'

                        },
                        'no fi': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'sign': 'no need'

                        },
                        'unknown': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'sign': 'no need'

                        }
                    },
                    'unsolicited': {
                        'fi': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        },
                        'no fi': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        },
                        'unknown': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        }
                    },
                    'unknown': {
                        'fi': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        },
                        'no fi': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        },
                        'unknown': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        }
                    }
                },
                'unknown': {
                    'solicited': {
                        'fi': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'sign': 'no need'

                        },
                        'no fi': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'sign': 'no need'

                        },
                        'unknown': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'sign': 'no need'

                        }
                    },
                    'unsolicited': {
                        'fi': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        },
                        'no fi': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        },
                        'unknown': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        }
                    },
                    'unknown': {
                        'fi': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        },
                        'no fi': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        },
                        'unknown': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'sign': 'NA'
                        }
                    }
                }
            }
        };
    }
}