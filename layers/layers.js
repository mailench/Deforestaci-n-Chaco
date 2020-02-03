var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DepartamentosdelChaco_1 = new ol.format.GeoJSON();
var features_DepartamentosdelChaco_1 = format_DepartamentosdelChaco_1.readFeatures(json_DepartamentosdelChaco_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DepartamentosdelChaco_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartamentosdelChaco_1.addFeatures(features_DepartamentosdelChaco_1);
var lyr_DepartamentosdelChaco_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DepartamentosdelChaco_1, 
                style: style_DepartamentosdelChaco_1,
                interactive: true,
                title: '<img src="styles/legend/DepartamentosdelChaco_1.png" /> Departamentos del Chaco'
            });
var lyr_Ao2019_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Año 2019",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Ao2019_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6792764.783905, -3131370.883224, -6687622.935647, -3011790.590741]
                            })
                        });
var lyr_Ao2005_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Año 2005",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Ao2005_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6792812.892694, -3131405.257980, -6687285.854389, -3010810.564621]
                            })
                        });
var lyr_Ao1990_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Año 1990",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Ao1990_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6792800.426722, -3131403.037855, -6687624.448601, -3011788.404757]
                            })
                        });
var format_Independencia_5 = new ol.format.GeoJSON();
var features_Independencia_5 = format_Independencia_5.readFeatures(json_Independencia_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Independencia_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Independencia_5.addFeatures(features_Independencia_5);
var lyr_Independencia_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Independencia_5, 
                style: style_Independencia_5,
                interactive: true,
                title: '<img src="styles/legend/Independencia_5.png" /> Independencia'
            });
var format_Maip_6 = new ol.format.GeoJSON();
var features_Maip_6 = format_Maip_6.readFeatures(json_Maip_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Maip_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Maip_6.addFeatures(features_Maip_6);
var lyr_Maip_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Maip_6, 
                style: style_Maip_6,
                interactive: true,
                title: '<img src="styles/legend/Maip_6.png" /> Maipú'
            });

lyr_OSMStandard_0.setVisible(true);lyr_DepartamentosdelChaco_1.setVisible(true);lyr_Ao2019_2.setVisible(true);lyr_Ao2005_3.setVisible(true);lyr_Ao1990_4.setVisible(true);lyr_Independencia_5.setVisible(true);lyr_Maip_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DepartamentosdelChaco_1,lyr_Ao2019_2,lyr_Ao2005_3,lyr_Ao1990_4,lyr_Independencia_5,lyr_Maip_6];
lyr_DepartamentosdelChaco_1.set('fieldAliases', {'objeto': 'objeto', 'nam': 'nam', });
lyr_Independencia_5.set('fieldAliases', {'objeto': 'objeto', 'nam': 'nam', 'sag': 'sag', 'area a km': 'area a km', });
lyr_Maip_6.set('fieldAliases', {'objeto': 'objeto', 'nam': 'nam', 'sag': 'sag', 'area a km': 'area a km', });
lyr_DepartamentosdelChaco_1.set('fieldImages', {'objeto': 'TextEdit', 'nam': 'TextEdit', });
lyr_Independencia_5.set('fieldImages', {'objeto': 'TextEdit', 'nam': 'TextEdit', 'sag': 'TextEdit', 'area a km': 'TextEdit', });
lyr_Maip_6.set('fieldImages', {'objeto': 'TextEdit', 'nam': 'TextEdit', 'sag': 'TextEdit', 'area a km': 'TextEdit', });
lyr_DepartamentosdelChaco_1.set('fieldLabels', {'objeto': 'no label', 'nam': 'inline label', 'sag': 'header label', });
lyr_Independencia_5.set('fieldLabels', {'objeto': 'no label', 'nam': 'inline label', 'sag': 'no label', 'area a km': 'inline label', });
lyr_Maip_6.set('fieldLabels', {'objeto': 'no label', 'nam': 'inline label', 'sag': 'no label', 'area a km': 'inline label', });
lyr_Maip_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});