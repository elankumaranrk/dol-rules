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
                            'signature': 'need'
                        },
                        'no fi': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'withheld',
                            'signature': 'not required'
                        },
                        'unknown': {
                            'scenario': 'valid',
                            'order': 'nigo',
                            'commission': 'NA',
                            'signature': 'NA'
                        }
                    },
                    'unsolicited': {
                        'fi': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        },
                        'no fi': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        },
                        'unknown': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        }
                    },
                    'unknown': {
                        'fi': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        },
                        'no fi': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        },
                        'unknown': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        }
                    }
                },
                'non qualified': {
                    'solicited': {
                        'fi': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'signature': 'not required'

                        },
                        'no fi': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'signature': 'not required'

                        },
                        'unknown': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'signature': 'not required'

                        }
                    },
                    'unsolicited': {
                        'fi': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        },
                        'no fi': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        },
                        'unknown': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        }
                    },
                    'unknown': {
                        'fi': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        },
                        'no fi': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        },
                        'unknown': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        }
                    }
                },
                'unknown': {
                    'solicited': {
                        'fi': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'signature': 'not required'

                        },
                        'no fi': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'signature': 'not required'

                        },
                        'unknown': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'signature': 'not required'

                        }
                    },
                    'unsolicited': {
                        'fi': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        },
                        'no fi': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        },
                        'unknown': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        }
                    },
                    'unknown': {
                        'fi': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        },
                        'no fi': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        },
                        'unknown': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
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
                            'signature': 'need'
                        },
                        'no fi': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'withheld',
                            'signature': 'not required'
                        },
                        'unknown': {
                            'scenario': 'valid',
                            'order': 'nigo',
                            'commission': 'NA',
                            'signature': 'NA'
                        }
                    },
                    'unsolicited': {
                        'fi': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        },
                        'no fi': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        },
                        'unknown': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        }
                    },
                    'unknown': {
                        'fi': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        },
                        'no fi': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        },
                        'unknown': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        }
                    }
                },
                'non qualified': {
                    'solicited': {
                        'fi': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'signature': 'not required'

                        },
                        'no fi': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'signature': 'not required'

                        },
                        'unknown': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'signature': 'not required'

                        }
                    },
                    'unsolicited': {
                        'fi': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        },
                        'no fi': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        },
                        'unknown': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        }
                    },
                    'unknown': {
                        'fi': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        },
                        'no fi': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        },
                        'unknown': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        }
                    }
                },
                'unknown': {
                    'solicited': {
                        'fi': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'signature': 'not required'

                        },
                        'no fi': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'signature': 'not required'

                        },
                        'unknown': {
                            'scenario': 'valid',
                            'order': 'igo',
                            'commission': 'pay',
                            'signature': 'not required'

                        }
                    },
                    'unsolicited': {
                        'fi': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        },
                        'no fi': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        },
                        'unknown': {
                            'scenario': 'invalid',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        }
                    },
                    'unknown': {
                        'fi': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        },
                        'no fi': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        },
                        'unknown': {
                            'scenario': 'NA',
                            'order': 'NA',
                            'commission': 'NA',
                            'signature': 'NA'
                        }
                    }
                }
            }
        };
    }
}