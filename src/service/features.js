import executeSql from '../database'

async function getFeatures() {
  const features = await executeSql('SELECT * FROM features')
  return handleFeatures(features)
}

function handleFeatures(features) {
  const result = []
  features.forEach((feature) => {
    if (feature.parent_index === null) {
      result.push({
        feature_index: feature.feature_index,
        feature_label: feature.feature_name,
        children: [],
      })
    } else {
      setChildren(feature, result)
    }
  })
  return result
}

function setChildren(child, parents) {
  for (const parent of parents) {
    if (parent.feature_index === child.parent_index) {
      if (!parent.children) {
        parent.children = []
      }
      parent.children.push({
        feature_index: child.feature_index,
        feature_label: child.feature_name,
      })
      break
    } else {
      if (parent.children) {
        setChildren(child, parent.children)
      }
    }
  }
}

export default getFeatures
