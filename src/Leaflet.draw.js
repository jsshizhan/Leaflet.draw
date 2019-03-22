/**
 * Leaflet.draw assumes that you have already included the Leaflet library.
 */
L.drawVersion = '0.4.2';
/**
 * @class L.Draw
 * @aka Draw
 *
 *
 * To add the draw toolbar set the option drawControl: true in the map options.
 *
 * @example
 * ```js
 *      var map = L.map('map', {drawControl: true}).setView([51.505, -0.09], 13);
 *
 *      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
 *          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 *      }).addTo(map);
 * ```
 *
 * ### Adding the edit toolbar
 * To use the edit toolbar you must initialise the Leaflet.draw control and manually add it to the map.
 *
 * ```js
 *      var map = L.map('map').setView([51.505, -0.09], 13);
 *
 *      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
 *          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 *      }).addTo(map);
 *
 *      // FeatureGroup is to store editable layers
 *      var drawnItems = new L.FeatureGroup();
 *      map.addLayer(drawnItems);
 *
 *      var drawControl = new L.Control.Draw({
 *          edit: {
 *              featureGroup: drawnItems
 *          }
 *      });
 *      map.addControl(drawControl);
 * ```
 *
 * The key here is the featureGroup option. This tells the plugin which FeatureGroup contains the layers that
 * should be editable. The featureGroup can contain 0 or more features with geometry types Point, LineString, and Polygon.
 * Leaflet.draw does not work with multigeometry features such as MultiPoint, MultiLineString, MultiPolygon,
 * or GeometryCollection. If you need to add multigeometry features to the draw plugin, convert them to a
 * FeatureCollection of non-multigeometries (Points, LineStrings, or Polygons).
 */
L.Draw = {};

/**
 * @class L.drawLocal
 * @aka L.drawLocal
 *
 * The core toolbar class of the API — it is used to create the toolbar ui
 *
 * @example
 * ```js
 *      var modifiedDraw = L.drawLocal.extend({
 *          draw: {
 *              toolbar: {
 *                  buttons: {
 *                      polygon: 'Draw an awesome polygon'
 *                  }
 *              }
 *          }
 *      });
 * ```
 *
 * The default state for the control is the draw toolbar just below the zoom control.
 *  This will allow map users to draw vectors and markers.
 *  **Please note the edit toolbar is not enabled by default.**
 */
L.drawLocal = {
	// format: {
	// 	numeric: {
	// 		delimiters: {
	// 			thousands: ',',
	// 			decimal: '.'
	// 		}
	// 	}
	// },
	draw: {
		toolbar: {
			// #TODO: this should be reorganized where actions are nested in actions
			// ex: actions.undo  or actions.cancel
			actions: {
				title: '取消围栏绘图',
				text: '取消围栏绘制'
			},
			finish: {
				title: '完成围栏绘图',
				text: '完成围栏绘制'
			},
			undo: {
				title: '删除最后一个点',
				text: '删除最后一个点'
			},
			buttons: {
				polyline: '绘制折线',
				polygon: '绘制多边形',
				rectangle: '绘制矩形',
				circle: '绘制圆形',
				marker: '绘制记号',
				circlemarker: '绘制圆圈'
			}
		},
		handlers: {
			circle: {
				tooltip: {
					start: '单击并拖动绘制圆.'
				},
				radius: '半径'
			},
			circlemarker: {
				tooltip: {
					start: '点击地图放置圆标记.'
				}
			},
			marker: {
				tooltip: {
					start: '点击地图连接标记.'
				}
			},
			polygon: {
				tooltip: {
					start: '单击开始绘图形状.',
					cont: '单击继续绘制形状.',
					end: '单击第一点关闭此形状.'
				}
			},
			polyline: {
				error: '<strong>Error:</strong> 形状边缘不能交叉!',
				tooltip: {
					start: '单击开始绘图线.',
					cont: '单击继续绘制线条.',
					end: '单击最后一点到终点.'
				}
			},
			rectangle: {
				tooltip: {
					start: '单击并拖动绘制矩形.'
				}
			},
			simpleshape: {
				tooltip: {
					end: '释放鼠标完成绘图.'
				}
			}
		}
	},
	edit: {
		toolbar: {
			actions: {
				save: {
					title: '保存更改',
					text: '保存更改'
				},
				cancel: {
					title: '取消编辑，放弃所有更改',
					text: '取消编辑'
				},
				clearAll: {
					title: '清除所有',
					text: '清除所有'
				}
			},
			buttons: {
				edit: '编辑',
				editDisabled: '无需编辑',
				remove: '删除',
				removeDisabled: '无可删除'
			}
		},
		handlers: {
			edit: {
				tooltip: {
					text: '拖动标记点以编辑.',
					subtext: '单击取消撤消更改.'
				}
			},
			remove: {
				tooltip: {
					text: '单击移除.'
				}
			}
		}
	}
};
