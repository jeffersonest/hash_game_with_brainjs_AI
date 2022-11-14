//0 = NULL
//10 = X
//20 = O

const data = [
    {
        input: {
            m00: 0, m01: 0, m02: 0,
            m10: 0, m11: 0, m12: 0,
            m20: 0, m21: 0, m22: 0,
        },
        output: {
            winnerX: 0,
            winnerO: 0,
        }
    },
    {
        input: {
            m00: 10, m01: 10, m02: 10,
            m10: 0, m11: 20, m12: 0,
            m20: 20, m21:  0, m22: 0,
        },
        output: {
            winnerX: 1,
            winnerO: 0,
        }
    },
    {
        input: {
            m00: 0, m01: 20, m02: 10,
            m10: 20, m11: 10, m12: 0,
            m20: 10, m21: 10, m22: 20,
        },
        output: {
            winnerX: 1,
            winnerO: 0,
        }
    }
    ,
    {
        input: {
            m00: 0, m01: 0, m02: 20,
            m10: 10, m11: 20, m12: 20,
            m20: 10, m21: 10, m22: 10,
        },
        output: {
            winnerX: 1,
            winnerO: 0,
        }
    }
    ,
    {
        input: {
            m00: 0, m01: 10, m02: 20,
            m10: 0, m11: 10, m12: 20,
            m20: 20, m21: 10, m22: 0,
        },
        output: {
            winnerX: 1,
            winnerO: 0,
        }
    },
    {
        input: {
            m00: 10, m01: 10, m02: 10,
            m10: 20, m11: 20, m12: 10,
            m20: 20, m21: 20, m22: 0,
        },
        output: {
            winnerX: 1,
            winnerO: 0,
        }
    },
    {
        input: {
            m00: 20, m01: 20, m02: 20,
            m10: 0, m11: 10, m12: 0,
            m20: 10, m21: 0, m22: 0,
        },
        output: {
            winnerX: 0,
            winnerO: 1,
        }
    }
    ,
    {
        input: {
            m00: 0, m01: 10, m02: 10,
            m10: 0, m11: 10, m12: 0,
            m20: 20, m21: 20, m22: 20,
        },
        output: {
            winnerX: 0,
            winnerO: 1,
        }
    }

    ,
    {
        input: {
            m00: 20, m01: 0, m02: 0,
            m10: 10, m11: 20, m12: 0,
            m20: 0, m21: 10, m22: 20,
        },
        output: {
            winnerX: 0,
            winnerO: 1,
        }
    }
    ,
    {
        input: {
            m00: 10, m01: 0, m02: 10,
            m10: 20, m11: 20, m12: 20,
            m20: 0, m21: 10, m22: 0,
        },
        output: {
            winnerX: 0,
            winnerO: 1,
        }
    },
    {
        input: {
            m00: 10, m01: 10, m02: 10,
            m10: 0, m11: 20, m12: 20,
            m20: 10, m21: 20, m22: 0,
        },
        output: {
            winnerX: 1,
            winnerO: 0,
        }
    }
    ,
    {
        input: {
            m00: 20, m01: 10, m02: 20,
            m10: 20, m11: 10, m12: 0,
            m20: 0, m21: 10, m22: 0,
        },
        output: {
            winnerX: 1,
            winnerO: 0,
        }
    }
    ,
    {
        input: {
            m00: 20, m01: 0, m02: 0,
            m10: 0, m11: 0, m12: 0,
            m20: 0, m21: 0, m22: 10,
        },
        output: {
            winnerX: 0,
            winnerO: 0,
        }
    }
    ,
    {
        input: {
            m00: 20, m01: 0, m02: 10,
            m10: 0, m11: 20, m12: 0,
            m20: 0, m21: 0, m22: 10,
        },
        output: {
            winnerX: 0,
            winnerO: 0,
        }
    }
    ,
    {
        input: {
            m00: 10, m01: 0, m02: 10,
            m10: 0, m11: 10, m12: 0,
            m20: 0, m21: 20, m22: 20,
        },
        output: {
            winnerX: 0,
            winnerO: 0,
        }
    }
    ,
    {
        input: {
            m00: 10, m01: 0, m02: 10,
            m10: 20, m11: 10, m12: 20,
            m20: 0, m21: 0, m22: 20,
        },
        output: {
            winnerX: 0,
            winnerO: 0,
        }
    }
    ,
    {
        input: {
            m00: 20, m01: 20, m02: 20,
            m10: 0, m11: 10, m12: 0,
            m20: 10, m21: 0, m22: 0,
        },
        output: {
            winnerX: 0,
            winnerO: 1,
        }
    }
    ,
    {
        input: {
            m00: 10, m01: 20, m02: 0,
            m10: 10, m11: 20, m12: 0,
            m20: 10, m21: 0, m22: 0,
        },
        output: {
            winnerX: 1,
            winnerO: 0,
        }
    }
    ,
    {
        input: {
            m00: 20, m01: 10, m02: 10,
            m10: 10, m11: 10, m12: 20,
            m20: 10, m21: 20, m22: 20,
        },
        output: {
            winnerX: 0,
            winnerO: 0,
        }
    }
    ,
    {
        input: {
            m00: 20, m01: 10, m02: 0,
            m10: 0, m11: 20, m12: 10,
            m20: 0, m21: 0, m22: 20,
        },
        output: {
            winnerX: 0,
            winnerO: 1,
        }
    }
    ,
    {
        input: {
            m00: 20, m01: 0, m02: 0,
            m10: 0, m11: 20, m12: 0,
            m20: 10, m21: 10, m22: 10,
        },
        output: {
            winnerX: 1,
            winnerO: 0,
        }
    }
    ,
    {
        input: {
            m00: 10, m01: 0, m02: 20,
            m10: 10, m11: 10, m12: 10,
            m20: 20, m21: 0, m22: 20,
        },
        output: {
            winnerX: 1,
            winnerO: 0,
        }
    }
    ,
    {
        input: {
            m00: 0, m01: 20, m02: 10,
            m10: 10, m11: 10, m12: 20,
            m20: 10, m21: 20, m22: 20,
        },
        output: {
            winnerX: 1,
            winnerO: 0,
        }
    }
    ,
    {
        input: {
            m00: 20, m01: 0, m02: 0,
            m10: 0, m11: 20, m12: 10,
            m20: 0, m21: 10, m22: 20,
        },
        output: {
            winnerX: 0,
            winnerO: 1,
        }
    }
    ,
    {
        input: {
            m00: 10, m01: 20, m02: 20,
            m10: 0, m11: 10, m12: 0,
            m20: 0, m21: 0, m22: 10,
        },
        output: {
            winnerX: 1,
            winnerO: 0,
        }
    }
    ,
    {
        input: {
            m00: 20, m01: 10, m02: 10,
            m10: 0, m11: 20, m12: 0,
            m20: 0, m21: 0, m22: 20,
        },
        output: {
            winnerX: 0,
            winnerO: 1,
        }
    }
    ,
    {
        input: {
            m00: 10, m01: 0, m02: 20,
            m10: 0, m11: 10, m12: 20,
            m20: 0, m21: 0, m22: 10,
        },
        output: {
            winnerX: 1,
            winnerO: 0,
        }
    }
];

export default data;


