function getLocalConfig(tenant) {
    switch (tenant) {
    case '14q': return {
        global: 0,
    };
    case '197': return {
        global: 0,
    };
    // Default: PROD and Version
    default: return {
        global: 0,
    };
    }
}

module.exports = {
    getLocalConfig,
};
