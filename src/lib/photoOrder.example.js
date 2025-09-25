// 照片顺序配置文件示例
// 您可以在这里调整照片的显示顺序
// 文件名不需要包含扩展名，系统会自动匹配

export const photoOrder = {
  animals: [
    // 动物照片顺序 - 按您想要的顺序排列
    // 示例：如果您想让 DSC00141.jpg 显示在第一张
    'DSC00141',  // 第一张
    'DSC00143',  // 第二张
    'DSC00146',  // 第三张
    'DSC00253-2', // 第四张
    'DSC00361',  // 第五张
    'DSC00371',  // 第六张
    'DSC00389',  // 第七张
    'DSC00397',  // 第八张
    'DSC00556'   // 第九张
  ],
  
  landscapes: [
    // 风景照片顺序 - 按您想要的顺序排列
    'DSC00780',  // 第一张
    'DSC02231',  // 第二张
    'DSC02236',  // 第三张
    'DSC02242',  // 第四张
    'DSC02262',  // 第五张
    'DSC02268',  // 第六张
    'DSC02362',  // 第七张
    'DSC02371'   // 第八张
  ],
  
  flowers: [
    // 花花照片顺序 - 按您想要的顺序排列
    // 当您添加花花照片后，在这里配置顺序
    // 示例：'flower1', 'flower2', 'flower3'
  ],
  
  cities: [
    // 城市照片顺序 - 按您想要的顺序排列
    // 当您添加城市照片后，在这里配置顺序
    // 示例：'city1', 'city2', 'city3'
  ]
}

// 获取排序后的照片列表
export function getOrderedPhotos(photos, category) {
  const order = photoOrder[category] || []
  
  if (order.length === 0) {
    // 如果没有配置顺序，使用默认排序
    return photos.sort()
  }
  
  // 按照配置的顺序排列
  const orderedPhotos = []
  const remainingPhotos = [...photos]
  
  // 先添加配置顺序中的照片
  order.forEach(filename => {
    const photo = remainingPhotos.find(p => 
      p.toLowerCase().startsWith(filename.toLowerCase())
    )
    if (photo) {
      orderedPhotos.push(photo)
      remainingPhotos.splice(remainingPhotos.indexOf(photo), 1)
    }
  })
  
  // 再添加剩余的照片
  orderedPhotos.push(...remainingPhotos.sort())
  
  return orderedPhotos
}
