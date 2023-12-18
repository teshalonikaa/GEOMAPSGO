var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DIGITASIEMPANG_1 = new ol.format.GeoJSON();
var features_DIGITASIEMPANG_1 = format_DIGITASIEMPANG_1.readFeatures(json_DIGITASIEMPANG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIGITASIEMPANG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIGITASIEMPANG_1.addFeatures(features_DIGITASIEMPANG_1);
var lyr_DIGITASIEMPANG_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DIGITASIEMPANG_1, 
                style: style_DIGITASIEMPANG_1,
                interactive: true,
                title: '<img src="styles/legend/DIGITASIEMPANG_1.png" /> DIGITASI EMPANG'
            });
var format_DIGITASIKEBUN_2 = new ol.format.GeoJSON();
var features_DIGITASIKEBUN_2 = format_DIGITASIKEBUN_2.readFeatures(json_DIGITASIKEBUN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIGITASIKEBUN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIGITASIKEBUN_2.addFeatures(features_DIGITASIKEBUN_2);
var lyr_DIGITASIKEBUN_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DIGITASIKEBUN_2, 
                style: style_DIGITASIKEBUN_2,
                interactive: true,
                title: '<img src="styles/legend/DIGITASIKEBUN_2.png" /> DIGITASI KEBUN'
            });
var format_DIGITASISEMAKBELUKAR_3 = new ol.format.GeoJSON();
var features_DIGITASISEMAKBELUKAR_3 = format_DIGITASISEMAKBELUKAR_3.readFeatures(json_DIGITASISEMAKBELUKAR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIGITASISEMAKBELUKAR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIGITASISEMAKBELUKAR_3.addFeatures(features_DIGITASISEMAKBELUKAR_3);
var lyr_DIGITASISEMAKBELUKAR_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DIGITASISEMAKBELUKAR_3, 
                style: style_DIGITASISEMAKBELUKAR_3,
                interactive: true,
                title: '<img src="styles/legend/DIGITASISEMAKBELUKAR_3.png" /> DIGITASI SEMAK BELUKAR'
            });
var format_DIGITASICERME_4 = new ol.format.GeoJSON();
var features_DIGITASICERME_4 = format_DIGITASICERME_4.readFeatures(json_DIGITASICERME_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIGITASICERME_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIGITASICERME_4.addFeatures(features_DIGITASICERME_4);
var lyr_DIGITASICERME_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DIGITASICERME_4, 
                style: style_DIGITASICERME_4,
                interactive: true,
                title: '<img src="styles/legend/DIGITASICERME_4.png" /> DIGITASI CERME'
            });
var format_shpkecamtankebomas_5 = new ol.format.GeoJSON();
var features_shpkecamtankebomas_5 = format_shpkecamtankebomas_5.readFeatures(json_shpkecamtankebomas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shpkecamtankebomas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shpkecamtankebomas_5.addFeatures(features_shpkecamtankebomas_5);
var lyr_shpkecamtankebomas_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_shpkecamtankebomas_5, 
                style: style_shpkecamtankebomas_5,
                interactive: true,
                title: '<img src="styles/legend/shpkecamtankebomas_5.png" /> shp kecamtan kebomas'
            });
var format_shpkecamatancerme_6 = new ol.format.GeoJSON();
var features_shpkecamatancerme_6 = format_shpkecamatancerme_6.readFeatures(json_shpkecamatancerme_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shpkecamatancerme_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shpkecamatancerme_6.addFeatures(features_shpkecamatancerme_6);
var lyr_shpkecamatancerme_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_shpkecamatancerme_6, 
                style: style_shpkecamatancerme_6,
                interactive: true,
                title: '<img src="styles/legend/shpkecamatancerme_6.png" /> shp kecamatan cerme'
            });
var format_ladang1_7 = new ol.format.GeoJSON();
var features_ladang1_7 = format_ladang1_7.readFeatures(json_ladang1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ladang1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ladang1_7.addFeatures(features_ladang1_7);
var lyr_ladang1_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ladang1_7, 
                style: style_ladang1_7,
                interactive: true,
                title: '<img src="styles/legend/ladang1_7.png" /> ladang 1'
            });
var format_POLIGONPL_8 = new ol.format.GeoJSON();
var features_POLIGONPL_8 = format_POLIGONPL_8.readFeatures(json_POLIGONPL_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLIGONPL_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLIGONPL_8.addFeatures(features_POLIGONPL_8);
var lyr_POLIGONPL_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLIGONPL_8, 
                style: style_POLIGONPL_8,
                interactive: true,
                title: '<img src="styles/legend/POLIGONPL_8.png" /> POLIGON PL'
            });
var format_POLIGONSAWAH_9 = new ol.format.GeoJSON();
var features_POLIGONSAWAH_9 = format_POLIGONSAWAH_9.readFeatures(json_POLIGONSAWAH_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLIGONSAWAH_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLIGONSAWAH_9.addFeatures(features_POLIGONSAWAH_9);
var lyr_POLIGONSAWAH_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLIGONSAWAH_9, 
                style: style_POLIGONSAWAH_9,
                interactive: true,
                title: '<img src="styles/legend/POLIGONSAWAH_9.png" /> POLIGON SAWAH'
            });
var format_bissmilahjalan_10 = new ol.format.GeoJSON();
var features_bissmilahjalan_10 = format_bissmilahjalan_10.readFeatures(json_bissmilahjalan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bissmilahjalan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bissmilahjalan_10.addFeatures(features_bissmilahjalan_10);
var lyr_bissmilahjalan_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bissmilahjalan_10, 
                style: style_bissmilahjalan_10,
                interactive: true,
                title: '<img src="styles/legend/bissmilahjalan_10.png" /> bissmilah jalan'
            });
var format_PL2023_11 = new ol.format.GeoJSON();
var features_PL2023_11 = format_PL2023_11.readFeatures(json_PL2023_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PL2023_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PL2023_11.addFeatures(features_PL2023_11);
var lyr_PL2023_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PL2023_11, 
                style: style_PL2023_11,
                interactive: true,
                title: '<img src="styles/legend/PL2023_11.png" /> PL 2023'
            });
var format_titikverifikasidanvalidasidatalapangan_12 = new ol.format.GeoJSON();
var features_titikverifikasidanvalidasidatalapangan_12 = format_titikverifikasidanvalidasidatalapangan_12.readFeatures(json_titikverifikasidanvalidasidatalapangan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titikverifikasidanvalidasidatalapangan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titikverifikasidanvalidasidatalapangan_12.addFeatures(features_titikverifikasidanvalidasidatalapangan_12);
var lyr_titikverifikasidanvalidasidatalapangan_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_titikverifikasidanvalidasidatalapangan_12, 
                style: style_titikverifikasidanvalidasidatalapangan_12,
                interactive: true,
                title: '<img src="styles/legend/titikverifikasidanvalidasidatalapangan_12.png" /> titik verifikasi dan validasi data lapangan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_DIGITASIEMPANG_1.setVisible(true);lyr_DIGITASIKEBUN_2.setVisible(true);lyr_DIGITASISEMAKBELUKAR_3.setVisible(true);lyr_DIGITASICERME_4.setVisible(true);lyr_shpkecamtankebomas_5.setVisible(true);lyr_shpkecamatancerme_6.setVisible(true);lyr_ladang1_7.setVisible(true);lyr_POLIGONPL_8.setVisible(true);lyr_POLIGONSAWAH_9.setVisible(true);lyr_bissmilahjalan_10.setVisible(true);lyr_PL2023_11.setVisible(true);lyr_titikverifikasidanvalidasidatalapangan_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_DIGITASIEMPANG_1,lyr_DIGITASIKEBUN_2,lyr_DIGITASISEMAKBELUKAR_3,lyr_DIGITASICERME_4,lyr_shpkecamtankebomas_5,lyr_shpkecamatancerme_6,lyr_ladang1_7,lyr_POLIGONPL_8,lyr_POLIGONSAWAH_9,lyr_bissmilahjalan_10,lyr_PL2023_11,lyr_titikverifikasidanvalidasidatalapangan_12];
lyr_DIGITASIEMPANG_1.set('fieldAliases', {'id': 'id', 'empang': 'empang', 'Luas': 'Luas', 'luas_ha': 'luas_ha', });
lyr_DIGITASIKEBUN_2.set('fieldAliases', {'id': 'id', 'kebun': 'kebun', 'Luas': 'Luas', });
lyr_DIGITASISEMAKBELUKAR_3.set('fieldAliases', {'id': 'id', 'Semak': 'Semak', 'Luas': 'Luas', });
lyr_DIGITASICERME_4.set('fieldAliases', {'id': 'id', });
lyr_shpkecamtankebomas_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'UUPP': 'UUPP', });
lyr_shpkecamatancerme_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'UUPP': 'UUPP', });
lyr_ladang1_7.set('fieldAliases', {'id': 'id', 'Luas': 'Luas', });
lyr_POLIGONPL_8.set('fieldAliases', {'id': 'id', 'P. Lahan': 'P. Lahan', 'Luas': 'Luas', });
lyr_POLIGONSAWAH_9.set('fieldAliases', {'id': 'id', 'sawah': 'sawah', 'Luas': 'Luas', 'luas_ha': 'luas_ha', });
lyr_bissmilahjalan_10.set('fieldAliases', {'id': 'id', 'pl': 'pl', });
lyr_PL2023_11.set('fieldAliases', {'id': 'id', 'PL 2019': 'PL 2019', 'PL 2023': 'PL 2023', 'Perubahan': 'Perubahan', });
lyr_titikverifikasidanvalidasidatalapangan_12.set('fieldAliases', {'id': 'id', 'titik': 'titik', 'X': 'X', 'Y': 'Y', });
lyr_DIGITASIEMPANG_1.set('fieldImages', {'id': 'TextEdit', 'empang': 'TextEdit', 'Luas': 'TextEdit', 'luas_ha': 'TextEdit', });
lyr_DIGITASIKEBUN_2.set('fieldImages', {'id': 'TextEdit', 'kebun': 'TextEdit', 'Luas': 'TextEdit', });
lyr_DIGITASISEMAKBELUKAR_3.set('fieldImages', {'id': 'TextEdit', 'Semak': 'TextEdit', 'Luas': 'TextEdit', });
lyr_DIGITASICERME_4.set('fieldImages', {'id': 'TextEdit', });
lyr_shpkecamtankebomas_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'UUPP': 'TextEdit', });
lyr_shpkecamatancerme_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'UUPP': 'TextEdit', });
lyr_ladang1_7.set('fieldImages', {'id': 'TextEdit', 'Luas': 'TextEdit', });
lyr_POLIGONPL_8.set('fieldImages', {'id': 'TextEdit', 'P. Lahan': 'TextEdit', 'Luas': 'TextEdit', });
lyr_POLIGONSAWAH_9.set('fieldImages', {'id': 'TextEdit', 'sawah': 'TextEdit', 'Luas': 'TextEdit', 'luas_ha': 'TextEdit', });
lyr_bissmilahjalan_10.set('fieldImages', {'id': 'TextEdit', 'pl': 'TextEdit', });
lyr_PL2023_11.set('fieldImages', {'id': 'TextEdit', 'PL 2019': 'TextEdit', 'PL 2023': 'TextEdit', 'Perubahan': 'TextEdit', });
lyr_titikverifikasidanvalidasidatalapangan_12.set('fieldImages', {'id': 'TextEdit', 'titik': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_DIGITASIEMPANG_1.set('fieldLabels', {'id': 'no label', 'empang': 'no label', 'Luas': 'no label', 'luas_ha': 'no label', });
lyr_DIGITASIKEBUN_2.set('fieldLabels', {'id': 'no label', 'kebun': 'no label', 'Luas': 'no label', });
lyr_DIGITASISEMAKBELUKAR_3.set('fieldLabels', {'id': 'no label', 'Semak': 'no label', 'Luas': 'no label', });
lyr_DIGITASICERME_4.set('fieldLabels', {'id': 'no label', });
lyr_shpkecamtankebomas_5.set('fieldLabels', {'OBJECTID': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'UUPP': 'no label', });
lyr_shpkecamatancerme_6.set('fieldLabels', {'OBJECTID': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'UUPP': 'no label', });
lyr_ladang1_7.set('fieldLabels', {'id': 'no label', 'Luas': 'no label', });
lyr_POLIGONPL_8.set('fieldLabels', {'id': 'no label', 'P. Lahan': 'no label', 'Luas': 'no label', });
lyr_POLIGONSAWAH_9.set('fieldLabels', {'id': 'no label', 'sawah': 'no label', 'Luas': 'no label', 'luas_ha': 'no label', });
lyr_bissmilahjalan_10.set('fieldLabels', {'id': 'no label', 'pl': 'no label', });
lyr_PL2023_11.set('fieldLabels', {'id': 'no label', 'PL 2019': 'no label', 'PL 2023': 'no label', 'Perubahan': 'no label', });
lyr_titikverifikasidanvalidasidatalapangan_12.set('fieldLabels', {'id': 'no label', 'titik': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_titikverifikasidanvalidasidatalapangan_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});