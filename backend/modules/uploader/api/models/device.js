class Device {
    constructor(model, serialNo, channels = []) {
        this.model = model;
        this.serialNo = serialNo;
        this.channels = channels;
    }

    getModel() {
        return this.model;
    }

    getSerialNumber() {
        return this.serialNo;
    }

    getChannels() {
        return this.channels;
    }

    addChannel(channel) {
        this.channels.push(channel);
    }

    clearChannels() {
        this.channels = [];
    }

    asObject() {
        return {
            model: this.model,
            serialNo: this.serialNo,
            channels: this.channels.map(channel => channel.asObject()),    
        };
    }
}

module.exports = {
    Device,
};