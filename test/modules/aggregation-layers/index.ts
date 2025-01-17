// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import './aggregation-layer.spec';
import './contour-layer/contour-layer.spec';
import './contour-layer/marching-squares.spec';
// import './cpu-grid-layer/cpu-grid-layer.spec';
// import './gpu-cpu-aggregator.spec';
// import './gpu-grid-layer/gpu-grid-cell-layer-vertex.spec';
// import './gpu-grid-layer/gpu-grid-cell-layer.spec';
// import './gpu-grid-layer/gpu-grid-layer.spec';
// import './grid-aggregation-layer.spec';
import './grid-aggregator.spec';
import './grid-layer.spec';
// import './heatmap-layer/heatmap-layer.spec';
import './heatmap-layer/heatmap-layer-utils.spec';
import './hexagon-layer.spec';
import './hexbin.spec';
import './screen-grid-layer.spec';
import './screengrid-cell-layer.spec';
import './utils/aggregation-operation-utils.spec';
import './utils/bin-sorter.spec';
import './utils/color-utils.spec';
// import './utils/gpu-grid-aggregator.spec';
import './utils/scale-utils.spec';

import './aggregation-layer-v9/webgl-aggregator.spec';
import './aggregation-layer-v9/cpu-aggregator/cpu-aggregator.spec';
import './aggregation-layer-v9/cpu-aggregator/vertex-accessor.spec';
