"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _plyr = _interopRequireDefault(require("@theankur/plyr"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash.difference"));

var _lodash2 = _interopRequireDefault(require("lodash.pick"));

var _defaultProps = _interopRequireDefault(require("./defaultProps"));

var _excluded = ["sources", "url", "preload", "poster", "tracks"],
    _excluded2 = ["key", "kind", "label", "src", "srclang", "default"],
    _excluded3 = ["sources", "url", "preload"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Plyr extends _react.Component {
  constructor() {
    var _this;

    super(...arguments);
    _this = this;

    _defineProperty(this, "player", null);

    _defineProperty(this, "elementRef", new _react.default.createRef());

    _defineProperty(this, "restProps", (0, _lodash.default)(Object.keys(this.props), Object.keys(Plyr.defaultProps)));

    _defineProperty(this, "state", {
      muted: null
    });

    _defineProperty(this, "getType", () => this.player && this.player.source && this.player.source.type);

    _defineProperty(this, "play", () => this.player && this.player.play());

    _defineProperty(this, "pause", () => this.player && this.player.pause());

    _defineProperty(this, "togglePlay", () => this.player && this.player.togglePlay());

    _defineProperty(this, "stop", () => this.player && this.player.stop());

    _defineProperty(this, "restart", () => this.player && this.player.restart());

    _defineProperty(this, "rewind", time => this.player && this.player.rewind(time));

    _defineProperty(this, "forward", time => this.player && this.player.forward(time));

    _defineProperty(this, "getCurrentTime", () => this.player && this.player.currentTime);

    _defineProperty(this, "setCurrentTime", currentTime => this.player.currentTime = currentTime);

    _defineProperty(this, "getDuration", () => this.player && this.player.duration);

    _defineProperty(this, "getVolume", () => this.player && this.player.volume);

    _defineProperty(this, "isMuted", () => this.player && this.player.muted);

    _defineProperty(this, "isPaused", () => this.player && this.player.paused);

    _defineProperty(this, "toggleMute", () => this.player && this.player.toggleControls(this.player.muted));

    _defineProperty(this, "setMuted", function () {
      var muted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return _this.player.muted = muted;
    });

    _defineProperty(this, "increaseVolume", step => this.player && this.player.increaseVolume(step));

    _defineProperty(this, "decreaseVolume", step => this.player && this.player.decreaseVolume(step));

    _defineProperty(this, "setVolume", amount => this.player.volume = amount);

    _defineProperty(this, "enterFullscreen", () => this.player && this.player.fullscreen.enter());

    _defineProperty(this, "exitFullscreen", () => this.player && this.player.fullscreen.exit());

    _defineProperty(this, "toggleFullscreen", () => this.player && this.player.fullscreen.toggle());

    _defineProperty(this, "updateVideoSource", (videoId, provider) => {
      this.player.source = {
        type: "video",
        sources: [{
          src: videoId,
          provider
        }]
      };
    });

    _defineProperty(this, "renderPlayerWithVideoId", () => {
      return /*#__PURE__*/_react.default.createElement("div", _extends({
        "data-plyr-provider": this.props.provider,
        "data-plyr-embed-id": this.props.videoId,
        ref: this.elementRef
      }, (0, _lodash2.default)(this.props, this.restProps)));
    });

    _defineProperty(this, "renderPlayerWithSRC", () => {
      var _this$props = this.props,
          {
        sources,
        url,
        preload,
        poster,
        tracks
      } = _this$props,
          rest = _objectWithoutProperties(_this$props, _excluded);

      var captionsMap = tracks.map((source, index) => {
        var {
          key = index,
          kind = "captions",
          label,
          src,
          srclang,
          default: def
        } = source,
            attributes = _objectWithoutProperties(source, _excluded2);

        return /*#__PURE__*/_react.default.createElement("track", _extends({
          key: key,
          kind: kind,
          label: label,
          src: src,
          srclang: srclang,
          default: def
        }, attributes, {
          ref: this.elementRef
        }));
      });

      if (sources && Array.isArray(sources) && sources.length) {
        return /*#__PURE__*/_react.default.createElement("video", _extends({
          preload: preload,
          poster: poster,
          ref: this.elementRef
        }, (0, _lodash2.default)(rest, this.restProps)), sources.map((source, index) => /*#__PURE__*/_react.default.createElement("source", {
          key: index,
          src: source.src,
          type: source.type,
          size: source.size && source.size
        })), captionsMap);
      }

      return /*#__PURE__*/_react.default.createElement("video", _extends({
        src: url,
        preload: preload,
        poster: poster,
        ref: this.elementRef
      }, (0, _lodash2.default)(rest, this.restProps)), captionsMap);
    });

    _defineProperty(this, "renderAudioPlayer", () => {
      var _this$props2 = this.props,
          {
        sources,
        url,
        preload
      } = _this$props2,
          rest = _objectWithoutProperties(_this$props2, _excluded3);

      if (sources && Array.isArray(sources) && sources.length) {
        return /*#__PURE__*/_react.default.createElement("audio", _extends({
          preload: preload,
          ref: this.elementRef
        }, rest), sources.map((source, index) => /*#__PURE__*/_react.default.createElement("source", {
          key: index,
          src: source.src,
          type: source.type
        })));
      }

      return /*#__PURE__*/_react.default.createElement("audio", _extends({
        preload: preload,
        src: url,
        ref: this.elementRef
      }, (0, _lodash2.default)(rest, this.restProps)));
    });
  }

  componentDidMount() {
    var defaultOptions = Object.keys(_defaultProps.default).reduce((acc, current) => _objectSpread(_objectSpread({}, acc), {}, {
      [current]: this.props[current]
    }), {});

    var options = _objectSpread(_objectSpread({}, defaultOptions), {}, {
      muted: this.state.muted
    });

    var node = this.elementRef.current;

    if (this.props.provider === "html5" && !!this.props.playsinline && !!node) {
      node.setAttribute("playsinline", "");
      node.setAttribute("webkit-playsinline", "");
    }

    this.player = node ? new _plyr.default(node, options) : null;

    if (this.player) {
      this.player.on("ready", () => {
        this.props.onReady && this.props.onReady(this.player); // TODO: workaround for autoplay in Youtube
        // https://github.com/sampotts/plyr/issues/1185

        if (this.props.autoplay) {
          this.player.play();
        }
      });
      this.player.on("play", () => {
        this.props.onPlay && this.props.onPlay();
      });
      this.player.on("previous", () => {
        this.props.onPrevious && this.props.onPrevious();
      });
      this.player.on("next", () => {
        this.props.onNext && this.props.onNext();
      });
      this.player.on("close", () => {
        this.props.onClose && this.props.onClose();
      });
      this.player.on("pause", () => {
        this.props.onPause && this.props.onPause();
      });
      this.player.on("ended", () => {
        this.props.onEnd && this.props.onEnd();
      });
      this.player.on("loadedmetadata", () => {
        this.props.onLoadedMetadata && this.props.onLoadedMetadata();
      });
      this.player.on("loadeddata", () => {
        this.props.onLoadedData && this.props.onLoadedData();
      });
      this.player.on("seeking", () => {
        this.props.onSeeking && this.props.onSeeking();
      });
      this.player.on("seeked", () => {
        var time = this.getCurrentTime();
        this.props.onSeeked && this.props.onSeeked(time);
      });
      this.player.on("ratechange", () => {
        var {
          speed
        } = this.player;
        this.props.onRateChange && this.props.onRateChange(speed);
      });
      this.player.on("timeupdate", () => {
        var time = this.getCurrentTime();
        this.props.onTimeUpdate && this.props.onTimeUpdate(time);
      });
      this.player.on("enterfullscreen", () => {
        this.props.onEnterFullscreen && this.props.onEnterFullscreen();
      });
      this.player.on("exitfullscreen", () => {
        this.props.onExitFullscreen && this.props.onExitFullscreen();
      });
      this.player.on("volumechange", () => {
        var {
          muted,
          volume
        } = this.player;
        this.props.onVolumeChange && this.props.onVolumeChange({
          muted,
          volume
        });
      });
      this.player.on("languagechange", () => {
        var {
          language
        } = this.player;
        this.props.onLanguageChange && this.props.onLanguageChange(language);
      });
      this.player.on("controlshidden", () => {
        this.props.onControlsHidden && this.props.onControlsHidden();
      });
      this.player.on("controlsshown", () => {
        this.props.onControlsShown && this.props.onControlsShown();
      });
      this.player.on("captionsenabled", () => {
        this.props.onCaptionsEnabled && this.props.onCaptionsEnabled();
      });
      this.player.on("captionsdisabled", () => {
        this.props.onCaptionsDisabled && this.props.onCaptionsDisabled();
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.muted !== this.props.muted) {
      this.player.muted = this.props.muted;
    }

    if (prevProps.videoId !== this.props.videoId) {
      this.props.videoId && this.updateVideoSource(this.props.videoId, this.props.provider);
    }
  }

  componentWillUnmount() {
    this.player && this.player.destroy();
  }

  render() {
    if (this.props.provider === "audio") {
      return this.renderAudioPlayer();
    } else if (this.props.provider === "html5") {
      return this.renderPlayerWithSRC();
    }

    return this.renderPlayerWithVideoId();
  }

}

_defineProperty(Plyr, "getDerivedStateFromProps", nextProps => ({
  muted: nextProps.muted
}));

_defineProperty(Plyr, "defaultProps", _objectSpread({
  provider: "youtube",
  videoId: null,
  url: null,
  tracks: [],
  sources: [],
  onReady: () => {},
  onPlay: () => {},
  onPrevious: () => {},
  onNext: () => {},
  onClose: () => {},
  onPause: () => {},
  onEnd: () => {},
  onLoadedMetadata: () => {},
  onLoadedData: () => {},
  onSeeking: () => {},
  onSeeked: () => {},
  onRateChange: () => {},
  onTimeUpdate: () => {},
  onEnterFullscreen: () => {},
  onExitFullscreen: () => {},
  onVolumeChange: () => {},
  onLanguageChange: () => {},
  onControlsHidden: () => {},
  onControlsShown: () => {},
  onCaptionsEnabled: () => {},
  onCaptionsDisabled: () => {}
}, _defaultProps.default));

_defineProperty(Plyr, "propTypes", {
  provider: _propTypes.default.oneOf(["youtube", "vimeo", "html5", "audio"]),
  videoId: _propTypes.default.string,
  url: _propTypes.default.string,
  onReady: _propTypes.default.func,
  onPlay: _propTypes.default.func,
  onPrevious: _propTypes.default.func,
  onNext: _propTypes.default.func,
  onClose: _propTypes.default.func,
  onPause: _propTypes.default.func,
  onEnd: _propTypes.default.func,
  onLoadedMetadata: _propTypes.default.func,
  onLoadedData: _propTypes.default.func,
  onSeeking: _propTypes.default.func,
  onSeeked: _propTypes.default.func,
  onRateChange: _propTypes.default.func,
  onTimeUpdate: _propTypes.default.func,
  onEnterFullscreen: _propTypes.default.func,
  onExitFullscreen: _propTypes.default.func,
  onVolumeChange: _propTypes.default.func,
  onLanguageChange: _propTypes.default.func,
  onControlsHidden: _propTypes.default.func,
  onControlsShown: _propTypes.default.func,
  onCaptionsEnabled: _propTypes.default.func,
  onCaptionsDisabled: _propTypes.default.func,
  // plyr props
  enabled: _propTypes.default.bool,
  title: _propTypes.default.string,
  debug: _propTypes.default.bool,
  autoplay: _propTypes.default.bool,
  autopause: _propTypes.default.bool,
  seekTime: _propTypes.default.number,
  volume: _propTypes.default.number,
  muted: _propTypes.default.bool,
  duration: _propTypes.default.number,
  displayDuration: _propTypes.default.bool,
  invertTime: _propTypes.default.bool,
  toggleInvert: _propTypes.default.bool,
  ratio: _propTypes.default.string,
  clickToPlay: _propTypes.default.bool,
  hideControls: _propTypes.default.bool,
  resetOnEnd: _propTypes.default.bool,
  disableContextMenu: _propTypes.default.bool,
  loadSprite: _propTypes.default.bool,
  iconPrefix: _propTypes.default.string,
  iconUrl: _propTypes.default.string,
  blankVideo: _propTypes.default.string,
  quality: _propTypes.default.shape({
    default: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
    options: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]))
  }),
  loop: _propTypes.default.shape({
    active: _propTypes.default.bool
  }),
  speed: _propTypes.default.shape({
    selected: _propTypes.default.number,
    options: _propTypes.default.arrayOf(_propTypes.default.number)
  }),
  keyboard: _propTypes.default.shape({
    focused: _propTypes.default.bool,
    global: _propTypes.default.bool
  }),
  tooltips: _propTypes.default.shape({
    controls: _propTypes.default.bool,
    seek: _propTypes.default.bool
  }),
  captions: _propTypes.default.shape({
    active: _propTypes.default.bool,
    language: _propTypes.default.string,
    update: _propTypes.default.bool
  }),
  fullscreen: _propTypes.default.shape({
    enabled: _propTypes.default.bool,
    fallback: _propTypes.default.bool,
    iosNative: _propTypes.default.bool
  }),
  storage: _propTypes.default.shape({
    enabled: _propTypes.default.bool,
    key: _propTypes.default.string
  }),
  controls: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOf(["close", "play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen", "previous", "next", "skip"])), _propTypes.default.func, _propTypes.default.object, _propTypes.default.bool]),
  settings: _propTypes.default.arrayOf(_propTypes.default.oneOf(["captions", "quality", "speed"])),
  poster: _propTypes.default.string,
  sources: _propTypes.default.arrayOf(_propTypes.default.shape({
    src: _propTypes.default.string.isRequired,
    type: _propTypes.default.string.isRequired,
    size: _propTypes.default.number
  })),
  tracks: _propTypes.default.arrayOf(_propTypes.default.shape({
    kind: _propTypes.default.string,
    label: _propTypes.default.string,
    src: _propTypes.default.string.isRequired,
    srclang: _propTypes.default.string,
    default: _propTypes.default.bool,
    key: _propTypes.default.any
  }))
});

var _default = Plyr;
exports.default = _default;