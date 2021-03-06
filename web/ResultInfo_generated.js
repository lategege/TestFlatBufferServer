// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var flatbuffer = flatbuffer || {};

/**
 * @constructor
 */
flatbuffer.FResultInfo = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {flatbuffer.FResultInfo}
 */
flatbuffer.FResultInfo.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {flatbuffer.FResultInfo=} obj
 * @returns {flatbuffer.FResultInfo}
 */
flatbuffer.FResultInfo.getRootAsFResultInfo = function(bb, obj) {
  return (obj || new flatbuffer.FResultInfo).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
flatbuffer.FResultInfo.prototype.code = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffer.FDebrisInfo=} obj
 * @returns {flatbuffer.FDebrisInfo|null}
 */
flatbuffer.FResultInfo.prototype.data = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? (obj || new flatbuffer.FDebrisInfo).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
flatbuffer.FResultInfo.startFResultInfo = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} code
 */
flatbuffer.FResultInfo.addCode = function(builder, code) {
  builder.addFieldInt32(0, code, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} dataOffset
 */
flatbuffer.FResultInfo.addData = function(builder, dataOffset) {
  builder.addFieldOffset(1, dataOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
flatbuffer.FResultInfo.endFResultInfo = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
flatbuffer.FResultInfo.finishFResultInfoBuffer = function(builder, offset) {
  builder.finish(offset);
};

/**
 * @constructor
 */
flatbuffer.FDebrisInfo = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {flatbuffer.FDebrisInfo}
 */
flatbuffer.FDebrisInfo.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {flatbuffer.FDebrisInfo=} obj
 * @returns {flatbuffer.FDebrisInfo}
 */
flatbuffer.FDebrisInfo.getRootAsFDebrisInfo = function(bb, obj) {
  return (obj || new flatbuffer.FDebrisInfo).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {number} index
 * @param {flatbuffer.FDebris=} obj
 * @returns {flatbuffer.FDebris}
 */
flatbuffer.FDebrisInfo.prototype.debrisList = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new flatbuffer.FDebris).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
flatbuffer.FDebrisInfo.prototype.debrisListLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
flatbuffer.FDebrisInfo.prototype.debrisHelp = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
flatbuffer.FDebrisInfo.startFDebrisInfo = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} debrisListOffset
 */
flatbuffer.FDebrisInfo.addDebrisList = function(builder, debrisListOffset) {
  builder.addFieldOffset(0, debrisListOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
flatbuffer.FDebrisInfo.createDebrisListVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
flatbuffer.FDebrisInfo.startDebrisListVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} debrisHelpOffset
 */
flatbuffer.FDebrisInfo.addDebrisHelp = function(builder, debrisHelpOffset) {
  builder.addFieldOffset(1, debrisHelpOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
flatbuffer.FDebrisInfo.endFDebrisInfo = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
flatbuffer.FDebris = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {flatbuffer.FDebris}
 */
flatbuffer.FDebris.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {flatbuffer.FDebris=} obj
 * @returns {flatbuffer.FDebris}
 */
flatbuffer.FDebris.getRootAsFDebris = function(bb, obj) {
  return (obj || new flatbuffer.FDebris).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
flatbuffer.FDebris.prototype.image = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {number}
 */
flatbuffer.FDebris.prototype.changeNum = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @returns {flatbuffers.Long}
 */
flatbuffer.FDebris.prototype.id = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
flatbuffer.FDebris.prototype.name = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {boolean}
 */
flatbuffer.FDebris.prototype.highlight = function() {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
};

/**
 * @param {flatbuffers.Builder} builder
 */
flatbuffer.FDebris.startFDebris = function(builder) {
  builder.startObject(5);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} imageOffset
 */
flatbuffer.FDebris.addImage = function(builder, imageOffset) {
  builder.addFieldOffset(0, imageOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} changeNum
 */
flatbuffer.FDebris.addChangeNum = function(builder, changeNum) {
  builder.addFieldInt32(1, changeNum, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} id
 */
flatbuffer.FDebris.addId = function(builder, id) {
  builder.addFieldInt64(2, id, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} nameOffset
 */
flatbuffer.FDebris.addName = function(builder, nameOffset) {
  builder.addFieldOffset(3, nameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {boolean} highlight
 */
flatbuffer.FDebris.addHighlight = function(builder, highlight) {
  builder.addFieldInt8(4, +highlight, +false);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
flatbuffer.FDebris.endFDebris = function(builder) {
  var offset = builder.endObject();
  return offset;
};

// Exports for Node.js and RequireJS
this.flatbuffer = flatbuffer;
